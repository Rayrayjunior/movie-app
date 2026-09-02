const API_URL = import.meta.env.VITE_MOVIES;

export const movieData = async () => {
    const response = await fetch(`${API_URL}/shows`);

    if (!response.ok) {
        throw new Error("Failed");
    }

    const data = await response.json();

    return data;
};