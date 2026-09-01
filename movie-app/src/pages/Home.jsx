import { useState, useEffect} from 'react'

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadMovies = async () => {

            try {
                setLoading(true);

                const article = await fetchData();
                setMovies(article)

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
                </div>
                ))}      
        </div>
    )
}

export default Home;