import {Suspense} from "react";
import ProductsPage from "../_components/ProductsPage/ProductsPage";

const ProductsPageRoot = () => {
    return (
        <Suspense>
            <ProductsPage />
        </Suspense>
    );
}

export default ProductsPageRoot;