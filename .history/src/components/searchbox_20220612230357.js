


export default function SearchBox(props){
    return<>
        <input
        value={props.value}
        onChange={()=> props.setSearchValue(event.target.value)}
         placeholder="Search Movie"></input>
    </>
}