import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  
  fetch('http://www.omdbapi.com/?i=tt3896198&apikey=7088e24d
  ')
  .then(response => response.json())
  .then( response => console.log(response))


  return (
    <>
      <header>
        <h1>Anime Series</h1>
      </header>
      <main></main>

      <footer>
        <h1>footer</h1>
      </footer>
    </>
  );
}

export default App;
