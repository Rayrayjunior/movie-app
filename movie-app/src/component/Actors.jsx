import { useState, useEffect } from "react";

const Actors = () => {

    const [actorsdata, setActordata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {

        const loadActors = async () => {
            
            try {
                setLoading(true);

                const article = await fetchdata();
                setActordata(article);

                // Fetch Data
            } catch (err) {
                setError("Not Found");
            } finally {
                setLoading(false)
            }
        };

        loadActors();
    }, []);


    return(
        <div></div>
    )


}

export default Actors;