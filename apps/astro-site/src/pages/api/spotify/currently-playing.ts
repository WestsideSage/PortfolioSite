import type { APIRoute } from 'astro';
import { getCurrentlyPlaying } from '../../../lib/spotify';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    // Check if Spotify is configured
    const clientId = import.meta.env.PUBLIC_SPOTIFY_CLIENT_ID;
    const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;
    const refreshToken = import.meta.env.SPOTIFY_REFRESH_TOKEN;

    if (!clientId || !clientSecret || !refreshToken) {
      return new Response(
        JSON.stringify({
          isPlaying: false,
          track: null,
          error: 'Spotify integration not configured. Please set up your environment variables.',
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const currentlyPlaying = await getCurrentlyPlaying();

    return new Response(JSON.stringify(currentlyPlaying), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error in currently-playing API:', error);

    return new Response(
      JSON.stringify({
        isPlaying: false,
        track: null,
        error: 'Failed to fetch currently playing track',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
