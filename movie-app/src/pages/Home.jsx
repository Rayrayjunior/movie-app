import { useState, useEffect, useMemo } from "react";

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
        }
    }, []);
}