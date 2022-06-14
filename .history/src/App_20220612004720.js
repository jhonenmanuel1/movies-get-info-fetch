import logo from './logo.svg';
import './App.css';

fetch('https://pokeapi.co/api/v2/pokemon/1/')
.then(response => response.json())
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
