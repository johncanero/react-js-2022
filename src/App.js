import { useEffect } from "react";

// API KEY: 6c4bfdec

// API KEY: OMDb API (The Open Movie Database) 
const API_URL = 'http://www.omdbapi.com?apikey=6c4bfdec'


const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <h1>Hello Word of App</h1>
    );
}

export default App;