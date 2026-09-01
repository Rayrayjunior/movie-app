import { useState, useEffect} from 'react'
import { movieData } from "../API/API"

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadMovies = async () => {

            try {
                setLoading(true);

                const MovieData = await movieData();
                setMovies(MovieData)

            } catch (err) {
                setError("Not Found")
             } finally {
                setLoading(false)
             }
        };

        loadMovies();
    }, []);


    return(
        <div>

            {loading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            {movies.map((movie) => (
                <div key={movie.show.id}>
                    <h2>{movie.show.name}</h2>
                    <h2>{movie.show.weight}</h2>
                    <h2>{movie.show.genres}</h2>
                </div>
                ))}      
        </div>
    )
}

export default Home;