import React from "react";
import SearchBox from "./searchbox";
import '../styles/MovieHeader.css'
export default function MovieHeader(props) {
  return (
    < >
      <div className="container-header">
      <div className="wraper-header">
      <h1 className="text-title">Movies App</h1>
        <SearchBox
          searchItem={props.searchItem}
          setSearchItem={props.setSearchItem}
        />
        <h2 className="text">By Jhon Santiago</h2>

      </div>
       
      </div>
    </>
  );
}
