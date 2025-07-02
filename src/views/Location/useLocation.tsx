import { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/Constants/index";
import { AboutPageData } from "../../types/contentTypes";
const useLocation = (location: string) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<boolean | null>(null);
    const [data, setData] = useState<AboutPageData | null>(null);

    if (!location) {
        setError(true);
        return { data, loading, error };
    }
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(BASE_URL + "get-location-data/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ location }),
            });

            if (!response.ok) {
                throw new Error(`Error fetching blog: ${response.statusText}`);
            }

            const data = await response.json().then((data) => data);
            if (data.code === 200) {
                setError(false);
                setData(data.data);
            }
            else {
                setError(true);
            }
        } catch (error) {
            console.error("this is error: ", error);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [location]);
    return { data, loading, error };
}

export default useLocation;