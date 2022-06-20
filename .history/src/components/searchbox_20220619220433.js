import React from "react";

export default function SearchBox(props) {
  return (
    <div className="col col-sm-4 mt-2">
      <input
        className="form-control"
        placeholder="search movies"
        value={props.value}
        onChange={()=>{
            props.setSearchValue
        }}
      ></input>
    </div>
  );
}
