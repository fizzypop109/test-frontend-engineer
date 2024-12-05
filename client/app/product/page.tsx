"use client"

import {useProductPage} from "./talons/useProductPage";
import classNames from "classnames";

const ProductPage = () => {
    const {product, loading, showingDescription, onAddToCart, updateShowingDescription} = useProductPage();

    return (
        <main>
            { loading && <div>Loading...</div> }
            { !loading && product && (
                <div className="flex flex-col gap-[10px]">
                    <div className="p-[20px] bg-white rounded-lg">
                        <img src={product.image} alt={`image for ${product.title}`}/>
                    </div>
                    <h3>{product.title}</h3>
                    <h4 className="font-bold">${product.price}</h4>

                    <button onClick={onAddToCart} className="w-full p-[10px] bg-[var(--coffee)] text-[var(--beige)] my-[20px] font-bold">Add To Cart
                    </button>

                    <div>
                        <h6 className="font-bold mb-[10px]">Description:</h6>
                        <p className={classNames({"line-clamp-2": !showingDescription})}>{product.description}</p>
                        <button className="mt-[5px]" onClick={updateShowingDescription}>{showingDescription ? 'See Less' : 'See More'}</button>
                    </div>
                </div>
            )}
        </main>
    )
}

export default ProductPage;