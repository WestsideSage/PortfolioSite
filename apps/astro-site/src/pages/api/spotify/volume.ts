import type { APIRoute } from 'astro';
import { setVolume } from '../../../lib/spotify';

export const prerender = false;

export const PUT: APIRoute = async ({ request }) => {
  try {
    // Check if request has a body
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Content-Type must be application/json',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const text = await request.text();
    if (!text.trim()) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Request body is empty',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    let body;
    try {
      body = JSON.parse(text);
    } catch {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid JSON in request body',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const { volume } = body;

    if (typeof volume !== 'number' || volume < 0 || volume > 100) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Volume must be a number between 0 and 100',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const success = await setVolume(volume);

    if (success) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Failed to set volume. Make sure Spotify is active and you have Premium.',
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  } catch (error) {
    console.error('Volume API error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Internal server error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
