import { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/Constants/index";

const useCities = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL + "city");
      if (!response.ok) {
        throw new Error(`Error fetching blog: ${response.statusText}`);
      }
      const data = await response.json().then((data) => data.data);

      setCities(data);
    } catch (error) {
      console.error("this is error: ", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { cities, loading, error };
};

export default useCities;
