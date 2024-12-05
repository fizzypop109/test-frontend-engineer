"use client"

import {useProductPage} from "./talons/useProductPage";
import classNames from "classnames";
import {QuantitySelector} from "../../_components/QuantitySelector/QuantitySelector";
import {ArrowIcon} from "../../_components/Icons/ArrowIcon";
import Link from "next/link";

const ProductPage = () => {
    const {product, loading, showingDescription, onAddToCart, updateShowingDescription, isInCart} = useProductPage();

    return (
        <main>
            { loading && <div>Loading...</div> }
            { !loading && product && (
                <div className="flex flex-col gap-[10px] relative">
                    <Link href={`products?category=${product.category}`} className="flex gap-[10px] mb-[20px] items-center w-full fixed bg-[var(--beige)]">
                        <div className="rotate-180">
                            <ArrowIcon widthClass="w-[20px]" heightClass="h-[20px]" color="var(--coffee)" />
                        </div>
                        BACK TO {product.category.toUpperCase()}
                    </Link>

                    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-[10px] sm:gap-[20px] mt-[50px]">
                        <div className="p-[20px] bg-white rounded-lg flex items-center justify-center">
                            <img src={product.image} alt={`image for ${product.title}`}/>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <h3>{product.title}</h3>
                            <h4 className="font-bold">${product.price}</h4>

                            <div className="flex items-center my-[20px]">
                                {isInCart ? <QuantitySelector product={product}/> :
                                    <button onClick={onAddToCart}
                                            className="w-full p-[10px] bg-[var(--coffee)] text-[var(--beige)] font-bold">Add
                                        To Cart
                                    </button>
                                }
                            </div>

                        </div>
                    </div>

                    <div>
                        <h6 className="font-bold my-[10px]">Description:</h6>
                        <p className={classNames({"line-clamp-2": !showingDescription})}>{product.description}</p>
                        <button className="mt-[5px]"
                                onClick={updateShowingDescription}>{showingDescription ? 'See Less' : 'See More'}</button>
                    </div>
                </div>
            )}
        </main>
    )
}

export default ProductPage;