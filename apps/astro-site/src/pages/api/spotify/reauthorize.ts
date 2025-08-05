import type { APIRoute } from 'astro';
import { getAuthUrl } from '../../../lib/spotify';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const authUrl = getAuthUrl();

    return new Response(
      JSON.stringify({
        authUrl,
        message:
          'Visit the authUrl to reauthorize your Spotify account with the required permissions.',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error generating auth URL:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to generate authorization URL',
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
