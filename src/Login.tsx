import React from 'react'


//
//the docs say to set response_type to code, instead of token, but code doesn't give me expected response
//the response is supposed to include an authcode (that can be exchanged for access token) and a value called state inside the url, but does not include state value when i set respose type to code
// const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=' + clientID + '&response_type=token&redirect_uri=' + redirectURI + '&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

// async function testFunction () {
//     fetch(AUTH_URL)
//     .then(res=>res.json())
//     .then(data=>console.log(data))
// }

export default function Login() {

    function handleLogin() {
        const clientID = '1553a231a3b74e48bb3dc6efdce3cb72'
        const clientSecret = '37da88f137294d5a9f6a7ea57f0d4be9'
        const redirectURI = 'http://localhost:5173/callback'
        const scope = 'streaming user-read-private user-read-email user-library-read'
        const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=' + clientID + '&response_type=token&redirect_uri=' + redirectURI + '&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

        window.location.href= AUTH_URL
    }


    return (
        <>
            <div>Login</div>
            {/* <a href={AUTH_URL}>click to login</a> */}
            {/* <button onClick={handleLogin}></button> */}

        </>
    )
}
