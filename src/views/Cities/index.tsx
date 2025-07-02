import CityCard from "../../components/common/CityCard";
import NotFound from "../../components/common/ErrorPage/NotFount";
import styles from "./Cities.module.css"
import useCities from "./useCities";
const Cities = () => {
    const { states, cities, loading, error } = useCities();
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

        <div className={styles.mainWrapper}>
            {states.map((group, index) => {
                const state = Object.keys(group)[0];
                const locations = group[state];
                return (
                    <div id={state} key={index} className={styles.cityGroup}>
                        <h2>{state}</h2>
                        <ul className={styles.citiesContainer}>
                            {locations.length > 0 ? (
                                locations.map((loc) => (
                                    <li key={loc.id}>
                                        <CityCard state={state} cityCard={loc} />
                                    </li>
                                ))
                            ) : (
                                <li>No locations available</li>
                            )}
                        </ul>
                    </div>
                );
            })}
        </div>

    )
}
export default Cities;