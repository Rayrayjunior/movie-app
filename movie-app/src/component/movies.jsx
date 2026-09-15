import { useEffect, useMemo, useState } from 'react'
import { movieData } from "../API/API";


const Movies = () => {

    const [moviesData, setMoviedata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        const loadMovies = async () => {

            try {

                setLoading();

                const movies = await movieData();

                setMoviedata(movies);
            } catch (err) {

                setError("Failed to load movies");
            } finally {

                setLoading(false)
            }
        };

        Movies();

    }, []);


    return (-
        <div>
            <h1>Movies</h1>
        </div>
    );
};

export default Movies;