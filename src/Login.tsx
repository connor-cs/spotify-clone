import React from 'react'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=1553a231a3b74e48bb3dc6efdce3cb72&response_type=code&redirect_uri=http://localhost:5173/callback&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
    return (
        <>
            <div>Login</div>
            <a href={AUTH_URL}>click to login</a>
        </>
    )
}
