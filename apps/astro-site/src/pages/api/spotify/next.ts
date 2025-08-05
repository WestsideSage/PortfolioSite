import type { APIRoute } from 'astro';
import { skipToNext } from '../../../lib/spotify';

export const prerender = false;

export const POST: APIRoute = async () => {
  try {
    const success = await skipToNext();
    return new Response(JSON.stringify({ success }), {
      status: success ? 200 : 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error in next API:', error);
    return new Response(JSON.stringify({ error: 'Failed to skip to next track' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
