import type { APIRoute } from 'astro';
import { getUserPlaylists } from '../../../lib/spotify';

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
          error: 'Spotify integration not configured. Please set up your environment variables.',
          playlists: [],
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const playlists = await getUserPlaylists();
    return new Response(JSON.stringify({ playlists }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error in playlists API:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to fetch playlists',
        playlists: [],
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
