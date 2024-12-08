import {Suspense} from "react";
import ProductPage from "../_components/ProductPage/ProductPage";

const ProductPageRoot = () => {
    return (
        <Suspense>
            <ProductPage />
        </Suspense>
    )
}

export default ProductPageRoot;