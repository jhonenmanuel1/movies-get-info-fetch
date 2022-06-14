import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";





function App() {
  const [pokemons, setPokemons] = useState([]);

useEffect(()=>{
  getData()
}, [])


function getData(){
  fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
    
    // setPokemons(response)
  })
  .catch((err) => console.error(err));

}
  return (
    <div className="App">
      <h1>Anime App</h1>
      <section>{
        console.log(pokemons)
      }</section>
    </div>
  );
}

export default App;

