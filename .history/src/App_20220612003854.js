import logo from './logo.svg';
import './App.css';

fetch('https://api.spotify.com/v1/albums')
.then( response => response.json())
.then(response => console.log(response))

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
