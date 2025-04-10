import { Helmet } from "react-helmet-async";
// H1: Build a Website That Ranks & Converts! H2: Get More Leads, More Traffic, and More Sales
const PageSeo = ({
    title = "Hightech Window Blinds by Vishal Interior",
    description = "Upgrade your space with high-tech window blinds by Vishal Interior. Stylish, functional, and smart solutions for modern living and workspaces.",
    image = "/images/logo.png",
    type = "website",
    url = "https://hightechwindowblinds.in/",
    keywords = "",
    canonicalUrl = "https://hightechwindowblinds.in/",
}) => {
    return (
        <Helmet>
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {/* Open Graph Meta Tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            {image && <meta property="og:image" content={image} />}
            {url && <meta property="og:url" content={url} />}
            <meta property="og:description" content={description} />

            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default PageSeo;
