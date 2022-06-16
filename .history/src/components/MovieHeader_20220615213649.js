import React, { useEffect, useState } from "react";
import SearchBox from "./searchbox";

export default function MovieHeader(props) {
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const getMovie = async () => {
    const API = `http://www.omdbapi.com/?s=${searchItem}&apikey=7088e24d`;

    const response = await fetch(API);
    const responseJson = await response.json();
    console.log(searchItem);

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  getMovie();

  useEffect(() => {
    getMovie();
  }, [searchItem]);

  return (
    <>
      <h1>Movies App</h1>
      <SearchBox searchItem={searchItem} setSearchItem={setSearchItem} />
      <h2>By Jhon Santiago</h2>
    </>
  );
}
