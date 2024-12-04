"use client"

import {useProductPage} from "@/app/products/talons/useProductPage";

const ProductPage = () => {
    const { loading, products, category } = useProductPage();

    return loading ? <div>Loading...</div> : (
        <main>
            <h1>{category?.toUpperCase()}</h1>

            { products.map((product) => (
                <div key={product.id}>
                    <h4>{ product.title }</h4>
                </div>
            ))}
        </main>
    );
}

export default ProductPage;