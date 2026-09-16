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
            {moviesData.map((movie) => (
                <div key={movie.name.id}>
                    <h2>{movie.show.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default Movies;