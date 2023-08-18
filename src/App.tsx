import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import './App.css'
import Login from './Login';
import { useEffect, useState } from 'react';
//take user input, artist, song, album, set it to state
//

function App() {

  const clientID = '1553a231a3b74e48bb3dc6efdce3cb72'
  const clientSecret = '37da88f137294d5a9f6a7ea57f0d4be9'

  // const api = SpotifyApi.withClientCredentials(
  //   '1553a231a3b74e48bb3dc6efdce3cb72', '37da88f137294d5a9f6a7ea57f0d4be9'
  // )

  const [token, setToken] = useState('')

  // useEffect(() => {
  //   const authParams = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form/urlencoded'
  //     },
  //     body: 'grant_type=client_credentials&client_id=' + clientID + '&client_secret=' + clientSecret
  //   }
  //   fetch('https://accounts.spotify.com/api/token', authParams)
  //   .then(res=>res.json())
  //   .then(data=>console.log(data))
  // }, [])

  // async function submit() {
  //   const items = await api.search('Greta Van Fleet', ['artist']);
  //   console.table(
  //     items.artists.items.map((item) => ({
  //       name: item.name,
  //       followers: item.followers.total,
  //       popularity: item.popularity,
  //     }))
  //   );
  // }

  return (
    <>
      {/* <button onClick={()=>submit()}>Submit</button> */}
      <Login />
    </>
  )
}

export default App
