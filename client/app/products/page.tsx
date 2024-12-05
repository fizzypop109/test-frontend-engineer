"use client"

import {Suspense} from "react";
import ProductPage from "../_components/ProductPage/ProductPage";

const ProductsPageRoot = () => {
    return (
        <Suspense>
            <ProductPage />
        </Suspense>
    );
}

export default ProductsPageRoot;