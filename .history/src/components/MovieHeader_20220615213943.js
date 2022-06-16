import React from 'react';
import SearchBox from './searchbox';
export default function MovieHeader ({searchItem, searchItem}){
    

    return (<>
        <h1>Movies App</h1>
        <SearchBox  searchItem={searchItem} setSearchItem={setSearchItem}/>
        <h2>By Jhon Santiago</h2>
       
    </>
    )

}

