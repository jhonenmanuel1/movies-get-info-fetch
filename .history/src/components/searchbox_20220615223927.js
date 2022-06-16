import "../styles/searchbox.css";


export default function SearchBox(props){
    return<>
        <input
        className="search-input"
        value={props.value}
        onChange={(event)=> props.setSearchItem(event.target.value)}
         placeholder="Search Movie"></input>
    </>
}