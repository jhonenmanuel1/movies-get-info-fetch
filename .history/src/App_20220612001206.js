import logo from './logo.svg';
import './App.css';

const options = {
  method : 'GET',
  Headers :{
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'unogsng.p.rapidapi.com'
  }


};
fetch('https://unogsng.p.rapidapi.com/genres', options)
.then(response => response.json())
.then(response => console.log(response))

function App() {
  return (
    <div className="App">
       <h1>
         Anime App
       </h1>
    </div>
  );
}

export default App;
