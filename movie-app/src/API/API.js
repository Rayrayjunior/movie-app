const API_URL = import.meta.env.VITE_MOVIES;

export const movieData = async () => {

    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return data;
}