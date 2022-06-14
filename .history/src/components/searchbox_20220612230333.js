


export default function SearchBox(props){
    return<>
        <input
        value={props.value}
        onChange={()=> props.setSearchValue}
         placeholder="Search Movie"></input>
    </>
}