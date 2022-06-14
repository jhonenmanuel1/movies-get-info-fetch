import logo from './logo.svg';
import './App.css';

fetch('https://api.spotify.com/v1/artists/21E3waRsmPlU7jZsS13rcj', {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        })
            .then((response) => {
                console.log(response.json().then(
                    (data) => { console.log(data) }
                ));
            });
function App() {
  return (
    <div className="App">
       <h1>
         Anime App
       </h1>
    </div>
  );
}

export default App;
