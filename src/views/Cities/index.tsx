import CityCard from "../../components/common/CityCard";
import NotFound from "../../components/common/ErrorPage/NotFount";
import styles from "./Cities.module.css"
import useCities from "./useCities";
const Cities = () => {
    const { cities, loading, error } = useCities();
    if (error) return <NotFound />
    if (loading) return (
        <div className={`${styles.citiesContainer}`}>{Array.from({ length: 6 }, (_, _index) => <div className="w-64 bg-white rounded-lg shadow-md p-4">
            {/* Image Placeholder */}
            <div className="w-full h-48 bg-gray-300 rounded shimmer animate-pulse"></div>

            {/* City Name Placeholder */}
            <div className=" w-full mt-4 h-4 w-32 bg-gray-300 rounded shimmer animate-pulse"></div>
        </div>)}</div>
    )

    return (
        <div>
            <div className={`${styles.citiesContainer}`}>
                {cities.map((city) => <CityCard cityCard={city} />)}
            </div>

        </div>
    )
}
export default Cities;