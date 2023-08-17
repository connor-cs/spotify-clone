import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import './App.css'
import Login from './Login';

//take user input, artist, song, album, set it to state
//

function App() {

  const api = SpotifyApi.withClientCredentials(
    '1553a231a3b74e48bb3dc6efdce3cb72', '37da88f137294d5a9f6a7ea57f0d4be9'
  )

  // async function getArtist() {
  //   const data = await fetch('https://api.spotify.com/v1/artists')
  // }

  async function submit() {
    const items = await api.search('Greta Van Fleet', ['artist']);
    console.table(
      items.artists.items.map((item) => ({
        name: item.name,
        followers: item.followers.total,
        popularity: item.popularity,
      }))
    );
  }

  return (
    <>
      <button onClick={()=>submit()}>Submit</button>
      <Login />
    </>
  )
}

export default App
