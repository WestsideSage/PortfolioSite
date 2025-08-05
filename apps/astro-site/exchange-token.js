const SPOTIFY_CLIENT_ID = '48486c2044214c7ab4dfa954fffd8f3c';
const SPOTIFY_CLIENT_SECRET = '760f91fe9f95435d88b6be6919d1b78c';
const SPOTIFY_REDIRECT_URI = 'http://127.0.0.1:4321/callback';
const code = 'AQDiZtPpCwEuwW4HbL7lbHyBwExwFkwtMVCh6UdpB1RrkbZJAPZW9oqJLVJoeTrPWduM57IvnVqZ5AaIOCxic91pSaLisF36vuXuzFquFHyWqsTUBLXpbb6Q-a05cwvWrTaIeWBAAWJJ8kSk2AG4r2FhjgiY69irheGQyXddeik8i-FaRe_0ZJSjQAh6cjUh9MnNUxg2OQWera_Acqmqer4-lDTrvrvnE3cjnIbM6DL04NzlWCeCFA4';

const exchangeTokens = async () => {
  console.log('Exchanging authorization code for tokens...');
  
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: SPOTIFY_REDIRECT_URI
    })
  });

  const result = await response.json();
  console.log('Token exchange result:', JSON.stringify(result, null, 2));
  
  if (result.refresh_token) {
    console.log('\n\n=== SUCCESS! ===');
    console.log('Add this to your .env file:');
    console.log(`SPOTIFY_REFRESH_TOKEN=${result.refresh_token}`);
  } else {
    console.log('\n=== ERROR ===');
    console.log('No refresh token received. Check the error above.');
  }
};

exchangeTokens().catch(console.error);
