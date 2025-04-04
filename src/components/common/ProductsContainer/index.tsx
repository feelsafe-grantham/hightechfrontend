import styles from "./ProductsContainer.module.css"
import OneProduct from "../../Products/OneProduct";
import { ProductCardType } from "../../../types/contentTypes";
const ProductsContainer = ({ products }: { products: ProductCardType[] }) => {
    return (
        <div className={`${styles.productsContainer}`}>
            {products.map((product, index) => (
                <OneProduct key={index} product={product} />
            ))}
        </div>
    )
}

export default ProductsContainer;