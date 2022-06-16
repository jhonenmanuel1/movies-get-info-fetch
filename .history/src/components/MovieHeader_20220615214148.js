import React from 'react';
import SearchBox from './searchbox';
export default function MovieHeader (props){
    

    return (<>
        <h1>Movies App</h1>
        <SearchBox  searchItem={props.searchItem} setSearchItem={props.setSearchItem}/>
        <h2>By Jhon Santiago</h2>
       
    </>
    )

}

