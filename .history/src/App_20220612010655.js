import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

const [pokemons, setPokemons] = useState([]);

useEffect(()=>{
  getData()
}, [])


function getData(){
  fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => response.json())
  .then((response) => {
    const { data = []} = response
    setPolemons(data)
  })
  .catch((err) => console.error(err));

}


function App() {
  return (
    <div className="App">
      <h1>Anime App</h1>
    </div>
  );
}

export default App;
