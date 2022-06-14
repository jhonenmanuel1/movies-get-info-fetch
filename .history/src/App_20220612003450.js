import logo from './logo.svg';
import './App.css';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c1b3d51d20msh28261218312955dp1dc285jsnf02a5f860452',
		'X-RapidAPI-Host': 'unogsng.p.rapidapi.com'
	}
};

fetch('https://unogsng.p.rapidapi.com/genres', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

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
