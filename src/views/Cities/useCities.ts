import { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/Constants/index";
interface LocationItem {
  id: number;
  url: string;
  label: string;
  image: string;
}

type LocationGroup = {
  [state: string]: LocationItem[];
};

const useCities = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [states, setStates] = useState<LocationGroup[]>([]);
  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL + "city");
      if (!response.ok) {
        throw new Error(`Error fetching blog: ${response.statusText}`);
      }
      const data = await response.json().then((data) => data.data);
      setStates(data);
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

  return { states, loading, error };
};

export default useCities;
