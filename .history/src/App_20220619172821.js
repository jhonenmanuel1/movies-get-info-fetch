import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const App =()=>{
    const [movies, setMovies] = useState([]);

    const  getMovies  = async  () =>{
        const url = `http://www.omdbapi.com/?s=$ari&apikey=263d22d8`;


        

    }
    return(
        <>
            <h1>Hello Bitches</h1>
        </>
    )
}

export default App;