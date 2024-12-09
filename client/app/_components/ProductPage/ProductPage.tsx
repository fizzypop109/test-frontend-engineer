"use client"

import {useProductPage} from "./talons/useProductPage";
import classNames from "classnames";
import {QuantitySelector} from "../QuantitySelector/QuantitySelector";
import {BreadCrumb} from "../BreadCrumb/BreadCrumb";
import ProductPageSkeleton from "./ProductPageSkeleton";

const ProductPage = () => {
    const {product, loading, showingDescription, onAddToCart, updateShowingDescription, isInCart} = useProductPage();

    return (
        <main>
            { loading ? <ProductPageSkeleton /> : (
                <div className="flex flex-col gap-[10px] relative">
                    <div className="flex gap-[10px] bg-[var(--beige)] mb-[10px]">
                        <BreadCrumb to="/" label="home"/>
                        {product && (
                            <>
                                <p>{'->'}</p>
                                <BreadCrumb to={`products?category=${product.category}`} label={product.category}/>
                                <p>{'->'}</p>
                                <BreadCrumb to={`product?id=${product.id}`} label={product.title}/>
                            </>
                        )}
                    </div>

                    {loading && <h3 className="mx-auto text-center">Loading...</h3>}
                    {!loading && !product && <h3 className="mx-auto text-center">No product found</h3>}

                    {product && (
                        <>
                            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-[10px] sm:gap-[20px]">
                                <div className="p-[20px] w-full h-[250px] sm:h-full bg-white rounded-lg flex items-center justify-center">
                                    <img className="h-full w-full object-contain" src={product.image} alt={`image for ${product.title}`}/>
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
                                <button className="mt-[5px] underline"
                                        onClick={updateShowingDescription}>{showingDescription ? 'See Less' : 'See More'}</button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </main>
    )
}

export default ProductPage;