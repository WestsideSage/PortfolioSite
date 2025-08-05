// Spotify Web API integration
const SPOTIFY_CLIENT_ID = import.meta.env.PUBLIC_SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = import.meta.env.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REDIRECT_URI = import.meta.env.PUBLIC_SPOTIFY_REDIRECT_URI;
const SPOTIFY_REFRESH_TOKEN = import.meta.env.SPOTIFY_REFRESH_TOKEN;

const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

interface SpotifyTrack {
  id: string;
  name: string;
  artists: Array<{ name: string }>;
  album: {
    name: string;
    images: Array<{ url: string; width: number; height: number }>;
  };
  duration_ms: number;
  external_urls: {
    spotify: string;
  };
}

interface SpotifyCurrentlyPlaying {
  is_playing: boolean;
  progress_ms: number;
  item: SpotifyTrack | null;
  shuffle_state: boolean;
  repeat_state: 'off' | 'track' | 'context';
  device: {
    id: string;
    is_active: boolean;
    is_private_session: boolean;
    is_restricted: boolean;
    name: string;
    type: string;
    volume_percent: number | null;
  };
}

export interface CurrentlyPlayingResponse {
  isPlaying: boolean;
  shuffle: boolean;
  repeatMode: 'off' | 'track' | 'context';
  volume: number | null;
  device: {
    id: string;
    name: string;
    type: string;
    is_active: boolean;
  } | null;
  track: {
    name: string;
    artist: string;
    album: string;
    albumArt: string;
    spotifyUrl: string;
    duration: number;
    progress: number;
  } | null;
}

// Get access token using refresh token
async function getAccessToken(): Promise<string> {
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
    throw new Error('Missing Spotify credentials. Please check your environment variables.');
  }

  try {
    const response = await fetch(SPOTIFY_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`)}`,
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: SPOTIFY_REFRESH_TOKEN,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Spotify token refresh failed:', response.status, errorData);
      throw new Error(
        `Failed to get access token: ${response.status} - ${errorData.error_description || 'Unknown error'}`
      );
    }

    const data = await response.json();
    if (!data.access_token) {
      throw new Error('No access token received from Spotify');
    }

    return data.access_token;
  } catch (error) {
    console.error('Error getting Spotify access token:', error);
    throw error;
  }
}

// Get currently playing track
export async function getCurrentlyPlaying(): Promise<CurrentlyPlayingResponse> {
  try {
    const accessToken = await getAccessToken();

    const response = await fetch(`${SPOTIFY_API_BASE}/me/player/currently-playing`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 204 || !response.ok) {
      return {
        isPlaying: false,
        track: null,
        shuffle: false,
        repeatMode: 'off',
        volume: null,
        device: null,
      };
    }

    const data: SpotifyCurrentlyPlaying = await response.json();

    if (!data.item) {
      return {
        isPlaying: false,
        track: null,
        shuffle: data.shuffle_state || false,
        repeatMode: data.repeat_state || 'off',
        volume: data.device?.volume_percent || null,
        device: data.device
          ? {
              id: data.device.id,
              name: data.device.name,
              type: data.device.type,
              is_active: data.device.is_active,
            }
          : null,
      };
    }

    return {
      isPlaying: data.is_playing,
      shuffle: data.shuffle_state || false,
      repeatMode: data.repeat_state || 'off',
      volume: data.device?.volume_percent || null,
      device: data.device
        ? {
            id: data.device.id,
            name: data.device.name,
            type: data.device.type,
            is_active: data.device.is_active,
          }
        : null,
      track: {
        name: data.item.name,
        artist: data.item.artists.map((artist) => artist.name).join(', '),
        album: data.item.album.name,
        albumArt: data.item.album.images[0]?.url || '',
        spotifyUrl: data.item.external_urls.spotify,
        duration: data.item.duration_ms,
        progress: data.progress_ms,
      },
    };
  } catch (error) {
    console.error('Error fetching currently playing track:', error);
    return {
      isPlaying: false,
      track: null,
      shuffle: false,
      repeatMode: 'off',
      volume: null,
      device: null,
    };
  }
}

// Playback control functions
export async function pausePlayback(): Promise<boolean> {
  try {
    const accessToken = await getAccessToken();
    const response = await fetch(`${SPOTIFY_API_BASE}/me/player/pause`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Spotify returns 204 for successful pause, even if already paused
    if (response.status === 204 || response.status === 200) {
      return true;
    }

    if (response.status === 404) {
      console.error('No active Spotify device found');
      return false;
    }

    if (response.status === 403) {
      console.error('Spotify Premium required for playback control');
      return false;
    }

    if (response.status === 401) {
      console.error(
        'Spotify authorization expired or insufficient permissions. Please re-authorize.'
      );
      return false;
    }

    const errorData = await response.json().catch(() => ({}));
    console.error('Error pausing playback:', response.status, errorData);
    return false;
  } catch (error) {
    console.error('Error pausing playback:', error);
    return false;
  }
}

export async function resumePlayback(): Promise<boolean> {
  try {
    const accessToken = await getAccessToken();
    const response = await fetch(`${SPOTIFY_API_BASE}/me/player/play`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Spotify returns 204 for successful play
    if (response.status === 204 || response.status === 200) {
      return true;
    }

    if (response.status === 404) {
      console.error('No active Spotify device found');
      return false;
    }

    if (response.status === 403) {
      console.error('Spotify Premium required for playback control');
      return false;
    }

    if (response.status === 401) {
      console.error(
        'Spotify authorization expired or insufficient permissions. Please re-authorize.'
      );
      return false;
    }

    const errorData = await response.json().catch(() => ({}));
    console.error('Error resuming playback:', response.status, errorData);
    return false;
  } catch (error) {
    console.error('Error resuming playback:', error);
    return false;
  }
}

export async function skipToNext(): Promise<boolean> {
  try {
    const accessToken = await getAccessToken();
    const response = await fetch(`${SPOTIFY_API_BASE}/me/player/next`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Spotify returns 204 for successful skip
    if (response.status === 204 || response.status === 200) {
      return true;
    }

    if (response.status === 404) {
      console.error('No active Spotify device found');
      return false;
    }

    if (response.status === 403) {
      console.error('Spotify Premium required for playback control');
      return false;
    }

    if (response.status === 401) {
      console.error(
        'Spotify authorization expired or insufficient permissions. Please re-authorize.'
      );
      return false;
    }

    const errorData = await response.json().catch(() => ({}));
    console.error('Error skipping to next track:', response.status, errorData);
    return false;
  } catch (error) {
    console.error('Error skipping to next track:', error);
    return false;
  }
}

export async function skipToPrevious(): Promise<boolean> {
  try {
    const accessToken = await getAccessToken();
    const response = await fetch(`${SPOTIFY_API_BASE}/me/player/previous`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Spotify returns 204 for successful skip
    if (response.status === 204 || response.status === 200) {
      return true;
    }

    if (response.status === 404) {
      console.error('No active Spotify device found');
      return false;
    }

    if (response.status === 403) {
      console.error('Spotify Premium required for playback control');
      return false;
    }

    if (response.status === 401) {
      console.error(
        'Spotify authorization expired or insufficient permissions. Please re-authorize.'
      );
      return false;
    }

    const errorData = await response.json().catch(() => ({}));
    console.error('Error skipping to previous track:', response.status, errorData);
    return false;
  } catch (error) {
    console.error('Error skipping to previous track:', error);
    return false;
  }
}

export async function setVolume(volumePercent: number): Promise<boolean> {
  try {
    const accessToken = await getAccessToken();
    const response = await fetch(
      `${SPOTIFY_API_BASE}/me/player/volume?volume_percent=${volumePercent}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.ok;
  } catch (error) {
    console.error('Error setting volume:', error);
    return false;
  }
}

// Get user's playlists
export async function getUserPlaylists(): Promise<any[]> {
  try {
    const accessToken = await getAccessToken();
    const response = await fetch(`${SPOTIFY_API_BASE}/me/playlists?limit=20`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Error fetching playlists:', response.status, errorData);
      return [];
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching playlists:', error);
    return [];
  }
}

// Play a specific playlist
export async function playPlaylist(playlistId: string): Promise<boolean> {
  try {
    const accessToken = await getAccessToken();
    const response = await fetch(`${SPOTIFY_API_BASE}/me/player/play`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        context_uri: `spotify:playlist:${playlistId}`,
      }),
    });

    // Spotify returns 204 for successful play
    if (response.status === 204 || response.status === 200) {
      return true;
    }

    if (response.status === 404) {
      console.error('No active Spotify device found');
      return false;
    }

    if (response.status === 403) {
      console.error('Spotify Premium required for playback control');
      return false;
    }

    if (response.status === 401) {
      console.error(
        'Spotify authorization expired or insufficient permissions. Please re-authorize.'
      );
      return false;
    }

    const errorData = await response.json().catch(() => ({}));
    console.error('Error playing playlist:', response.status, errorData);
    return false;
  } catch (error) {
    console.error('Error playing playlist:', error);
    return false;
  }
}

// Get authorization URL for initial setup
export function getAuthUrl(): string {
  const clientId = import.meta.env.PUBLIC_SPOTIFY_CLIENT_ID;
  const redirectUri = import.meta.env.PUBLIC_SPOTIFY_REDIRECT_URI;

  console.log('Debug - Client ID:', clientId ? 'Set' : 'Not set');
  console.log('Debug - Redirect URI:', redirectUri);

  if (!clientId) {
    throw new Error('PUBLIC_SPOTIFY_CLIENT_ID is not set');
  }

  if (!redirectUri) {
    throw new Error('PUBLIC_SPOTIFY_REDIRECT_URI is not set');
  }

  const scopes = [
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-recently-played',
    'playlist-read-private',
    'playlist-read-collaborative',
    'streaming',
    'user-read-email',
    'user-read-private',
  ].join(' ');

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope: scopes,
    redirect_uri: redirectUri,
    show_dialog: 'true',
  });

  const authUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;
  console.log('Generated auth URL:', authUrl);

  return authUrl;
}

// Exchange authorization code for tokens (for initial setup)
export async function exchangeCodeForTokens(code: string): Promise<any> {
  console.log('Debug - Exchanging code for tokens');
  console.log('Debug - Code received:', code ? 'Present' : 'Missing');
  console.log('Debug - Client ID:', SPOTIFY_CLIENT_ID ? 'Set' : 'Missing');
  console.log('Debug - Client Secret:', SPOTIFY_CLIENT_SECRET ? 'Set' : 'Missing');
  console.log('Debug - Redirect URI:', SPOTIFY_REDIRECT_URI);

  const response = await fetch(SPOTIFY_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`)}`,
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: SPOTIFY_REDIRECT_URI || '',
    }),
  });

  console.log('Debug - Token exchange response status:', response.status);
  const result = await response.json();
  console.log('Debug - Token exchange result:', result);

  return result;
}
