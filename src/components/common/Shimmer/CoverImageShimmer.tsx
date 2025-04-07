const CoverImageShimmer = () => {
    return (
        <div className="relative w-full aspect-[3/1] bg-gray-200 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer"></div>
        </div>
    );
}

export default CoverImageShimmer;
