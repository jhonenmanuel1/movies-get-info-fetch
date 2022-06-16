import React from 'react';
import SearchBox from './searchbox';
export default function MovieHeader (props){
    

    return (<>
        <h1>Movies App</h1>
        <SearchBox  searchItem={searchItem.props} setSearchItem={setSearchItem.props}/>
        <h2>By Jhon Santiago</h2>
       
    </>
    )

}

