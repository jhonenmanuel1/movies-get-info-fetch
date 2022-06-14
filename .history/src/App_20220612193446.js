import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  
  fetch('http://www.omdbapi.com/?apikey=[yourkey]&')
  .then(response => response.json())


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
