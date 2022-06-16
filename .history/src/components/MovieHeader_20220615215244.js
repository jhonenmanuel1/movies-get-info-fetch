import React from "react";
import SearchBox from "./searchbox";
import '../styles/MovieHeader.css'
export default function MovieHeader(props) {
  return (
    <>
      <div className="wraper-header">
        <h1>Movies App</h1>
        <SearchBox
          searchItem={props.searchItem}
          setSearchItem={props.setSearchItem}
        />
        <h2>By Jhon Santiago</h2>
      </div>
    </>
  );
}
