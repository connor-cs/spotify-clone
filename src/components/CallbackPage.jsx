import React, { useEffect, useState } from 'react';
import { SpotifyAuthCallback } from 'react-spotify-auth';

const CallbackPage = () => {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    SpotifyAuthCallback.handleCallback();
    const token = localStorage.getItem('spotifyAuthToken');
    if (token) {
      setAccessToken(token);
    }
  }, []);

  return (
    <div>
      <h2>Callback Page</h2>
      {accessToken ? (
        <p>Access Token: {accessToken}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CallbackPage;