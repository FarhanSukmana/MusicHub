import { useState, useEffect } from 'react';
import axios from 'axios';

const CLIENT_ID = 'd46ba9d00be048ad8b60960eec76b9df';
const CLIENT_SECRET = '2386220a664a4eb49332b4190a9ac1bf';

function Request() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const authData = {
      grant_type: 'client_credentials',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    };

    const authConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    axios
      .post('https://accounts.spotify.com/api/token', authData, authConfig)
      .then((response) => {
        const token = response.data.access_token;
        setAccessToken(token);
      })
      .catch((error) => {
        console.error('Error getting access token:', error);
      });
  }, []);

  return accessToken;
}

export default Request;
