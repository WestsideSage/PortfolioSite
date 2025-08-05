import type { APIRoute } from 'astro';
import { skipToPrevious } from '../../../lib/spotify';

export const prerender = false;

export const POST: APIRoute = async () => {
  try {
    const success = await skipToPrevious();
    return new Response(JSON.stringify({ success }), {
      status: success ? 200 : 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error in previous API:', error);
    return new Response(JSON.stringify({ error: 'Failed to skip to previous track' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
