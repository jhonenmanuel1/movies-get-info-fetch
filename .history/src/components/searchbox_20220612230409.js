


export default function SearchBox(props){
    return<>
        <input
        value={props.value}
        onChange={(event)=> props.setSearchValue(event.target.value)}
         placeholder="Search Movie"></input>
    </>
}