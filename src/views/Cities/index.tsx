import CityCard from "../../components/common/CityCard";
import NotFound from "../../components/common/ErrorPage/NotFount";
import styles from "./Cities.module.css"
import useCities from "./useCities";
const Cities = () => {
    const { cities, loading, error } = useCities();
    if (error) return <NotFound />
    if (loading) return <div>Loading...</div>

    return (
        <div>
            <div className={`${styles.citiesContainer}`}>
                {cities.map((city) => <CityCard cityCard={city} />)}
            </div>

        </div>
    )
}
export default Cities;