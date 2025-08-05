import type { APIRoute } from 'astro';
import { pausePlayback } from '../../../lib/spotify';

export const prerender = false;

export const POST: APIRoute = async () => {
  try {
    const success = await pausePlayback();
    return new Response(JSON.stringify({ success }), {
      status: success ? 200 : 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error in pause API:', error);
    return new Response(JSON.stringify({ error: 'Failed to pause playback' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
