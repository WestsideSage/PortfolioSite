# Spotify Integration Setup

This guide will help you set up the Spotify integration for your portfolio site.

## Prerequisites

1. A Spotify account (free or premium)
2. Access to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)

## Setup Steps

### 1. Create a Spotify App

1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Click "Create app"
3. Fill in the app details:
   - **App name**: Your Portfolio Site (or any name you prefer)
   - **App description**: Portfolio site background music player
   - **Redirect URI**: `http://localhost:9003/auth/spotify/callback`
   - **Which API/SDKs are you planning to use**: Web API
4. Accept the terms and create the app

### 2. Get Your Credentials

1. In your newly created app, go to "Settings"
2. Copy the **Client ID**
3. Click "View client secret" and copy the **Client Secret**

### 3. Configure Environment Variables

1. Copy the `.env.example` file to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and add your credentials:
   ```env
   PUBLIC_SPOTIFY_CLIENT_ID=your_client_id_here
   SPOTIFY_CLIENT_SECRET=your_client_secret_here
   PUBLIC_SPOTIFY_REDIRECT_URI=http://localhost:9003/auth/spotify/callback
   SPOTIFY_REFRESH_TOKEN=will_be_filled_in_step_4
   ```

### 4. Get Your Refresh Token

1. Start your development server:

   ```bash
   pnpm dev
   ```

2. Navigate to: `http://localhost:9003/auth/spotify/callback`

3. Click "Connect with Spotify" and authorize the application

4. Copy the refresh token that appears on the success page

5. Add the refresh token to your `.env` file:

   ```env
   SPOTIFY_REFRESH_TOKEN=your_refresh_token_here
   ```

6. Restart your development server

### 5. Test the Integration

1. Open Spotify and start playing a song
2. Visit your portfolio site
3. You should see a music player widget appear in the bottom-right corner
4. The player will show the currently playing track information

## Features

- **Real-time updates**: Shows currently playing track
- **Album artwork**: Displays the album cover
- **Track information**: Shows song name, artist, and album
- **Progress indicator**: Visual progress bar for the current track
- **Spotify link**: Direct link to open the track in Spotify
- **Responsive design**: Works on desktop and mobile
- **Minimizable**: Can be collapsed to save screen space

## Troubleshooting

### Player Not Showing Music

- Make sure Spotify is actively playing music (not paused)
- Check that your refresh token is valid
- Verify all environment variables are set correctly

### Authorization Errors

- Make sure the redirect URI in your Spotify app settings matches exactly: `http://localhost:9003/auth/spotify/callback`
- Check that your Client ID and Client Secret are correct

### API Errors

- Your refresh token may have expired - repeat the authorization process
- Check the browser console for specific error messages

## Production Deployment

When deploying to production:

1. Update the redirect URI in your Spotify app settings to match your production domain:

   ```
   https://yourdomain.com/auth/spotify/callback
   ```

2. Update the `PUBLIC_SPOTIFY_REDIRECT_URI` in your production environment variables

3. Make sure all environment variables are set in your hosting platform

## Customization

The Spotify player component can be customized by editing:

- `src/components/SpotifyPlayer.astro` - Main component logic and styling
- Update the polling interval (default: 5 seconds) in the JavaScript
- Modify the player position, size, or appearance with CSS

## Privacy and Security

- The refresh token should be kept secure and not committed to version control
- The integration only reads your currently playing track - it cannot control playback
- All API calls are made server-side to protect your credentials
