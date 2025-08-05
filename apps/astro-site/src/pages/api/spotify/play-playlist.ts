import type { APIRoute } from 'astro';
import { playPlaylist } from '../../../lib/spotify';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { playlistId } = body;

    if (!playlistId) {
      return new Response(JSON.stringify({ error: 'Playlist ID is required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const success = await playPlaylist(playlistId);
    return new Response(JSON.stringify({ success }), {
      status: success ? 200 : 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error in play-playlist API:', error);
    return new Response(JSON.stringify({ error: 'Failed to play playlist' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
