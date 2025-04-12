import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/Constants";
import { useSnackbar } from "../Operations/Alert";
import Alerts from "../components/common/Alert";
import { AlertProps } from "../types/contentTypes";

const useReview = () => {
    const [data, setData] = useState<AlertProps>({
        message: "",
        name: "",
        emoji: "",
        segment: "",
        type: "comment",
    });

    const { showSnackbar } = useSnackbar();
    const fetchData = async () => {
        try {
            const response = await fetch(BASE_URL + "get-reviews/");
            if (!response.ok) {
                throw new Error(`Error fetching blog: ${response.statusText}`);
            }
            const data = await response.json();
            setData(data.data);
        } catch (error) {

        }
    };

    useEffect(() => {
        const getRandomInterval = () =>
            Math.floor(Math.random() * (20000 - 8000 + 1)) + 8000;
        const interval = setInterval(() => {
            fetchData();

        }, getRandomInterval());
        return () => clearInterval(interval);
    }, [fetchData]);

    useEffect(() => {
        if (data && data.message) {
            showSnackbar(<Alerts alert={data} />, "success");
        }
    }, [data, showSnackbar]);

    return
};

export default useReview;
