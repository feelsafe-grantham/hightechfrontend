const ProductContainer = () => {
    return (
        <div style={{ margin: '0px auto' }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-[1200px]">
            <div className="productCard w-[400px] h-[480px] bg-gray-200 animate-pulse rounded-lg"></div>
            <div className="productCard w-[400px] h-[480px] bg-gray-200 animate-pulse rounded-lg"></div>
            <div className="productCard w-[400px] h-[480px] bg-gray-200 animate-pulse rounded-lg"></div>
            <div className="productCard w-[400px] h-[480px] bg-gray-200 animate-pulse rounded-lg"></div>
            <div className="productCard w-[400px] h-[480px] bg-gray-200 animate-pulse rounded-lg"></div>
            <div className="productCard w-[400px] h-[480px] bg-gray-200 animate-pulse rounded-lg"></div>
        </div>
    );
};
export default ProductContainer;