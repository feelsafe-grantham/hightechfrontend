import ErrorPage from "../../components/common/ErrorPage";
import PageSeo from "../../components/common/PageSeo";
import LocationComponent from "../../components/SeoPages/LocationPage";
import useLocation from "./useLocation"
import { useParams } from "react-router-dom";
const LocationPage = () => {
    const { location } = useParams<{ location: string }>();
    const { data, error, loading
    } = useLocation(location as string);
    if (error) return <ErrorPage />;
    if (loading) return <div className="w-64 w-full bg-white rounded-lg shadow-md p-4">
        {/* Image Placeholder */}
        <div className="w-full h-96 bg-gray-300 rounded shimmer animate-pulse"></div>

        {/* City Name Placeholder */}

    </div>;

    return (
        <> {
            data &&
            <>
                <PageSeo
                    title={data.meta_title || "High Tech Window Blinds by Vishal Interior - Window Blinds in Delhi"}
                    description={data.meta_description || "Explore High Tech Window Blinds by Vishal Interior. Top manufacturer in Delhi offering stylish and durable window blinds for homes and offices."}
                    keywords={data.meta_keywords || ""}
                    url={data.meta_url || "https://www.hightechwindowblinds.in/"}
                    canonicalUrl={data.meta_canonical_url || "https://www.hightechwindowblinds.in/"}
                />
                <LocationComponent data={data} />
            </>
        }
        </>
    )
}

export default LocationPage;