import React from 'react';

export default function MovieHeader (props){

    return (<>
        <h1>Movies App</h1>
        <SearchBox  searchItem={searchItem} setSearchItem={setSearchItem}/>
       
    </>
    )

}

