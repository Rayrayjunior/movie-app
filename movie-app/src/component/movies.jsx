import { useEffect, useMemo, useState } from 'react'
import { movieData } from "../API/API";


const Movies = () => {

    const [moviesData, setMoviedata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    return (
        <div>
            <h1>Movies</h1>
        </div>
    );
};

export default Movies;