const HeroImagesShimmer = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="relative w-full aspect-[3/1] bg-gray-200 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer"></div>
            </div>
            <div className="relative w-full aspect-[3/1] bg-gray-200 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer"></div>
            </div>
            <div className="relative w-full aspect-[3/1] bg-gray-200 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer"></div>
            </div>
        </div>
    );
};

export default HeroImagesShimmer;