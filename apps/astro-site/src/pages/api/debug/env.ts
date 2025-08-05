import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const clientId = import.meta.env.PUBLIC_SPOTIFY_CLIENT_ID;
  const redirectUri = import.meta.env.PUBLIC_SPOTIFY_REDIRECT_URI;

  return new Response(
    JSON.stringify(
      {
        clientId: clientId || 'NOT_SET',
        redirectUri: redirectUri || 'NOT_SET',
        hasQuotes: redirectUri?.includes("'") || redirectUri?.includes('"') || false,
      },
      null,
      2
    ),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
