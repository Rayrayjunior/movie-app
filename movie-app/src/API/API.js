const API_KEY = import.meta.env.VITE_MOVIES;

export const movieData = async () => {

    const response = await fetch(API_KEY);

    if (!response.ok) {
        throw new Error("Failed");
    }

    const data = await response.json();

    return data;
}