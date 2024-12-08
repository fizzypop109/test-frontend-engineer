"use client"

import {useSearchParams} from "next/navigation";
import {useContext, useEffect, useState} from "react";
import {Product} from "../../../types";
import {CartContext} from "../../../_contextProviders/CartContextProvider";

export const useProductPage = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [showingDescription, setShowingDescription] = useState(false);

    const { cart, addToCart } = useContext(CartContext);

    const searchParams = useSearchParams();
    const productId = searchParams.get('id');

    // On first load, get the product using the id in the search params and store it
    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.in/api/products/${productId}`);

                if (!response.ok) {
                    throw new Error(response.statusText)
                }

                const json = await response.json();

                setLoading(false);
                setProduct(json.product);
            }
            catch (error) {
                if (typeof error === "string") {
                    console.error(error);
                }
                else if (error instanceof Error) {
                    console.log(`Error ${error.message}`);
                }

                setLoading(false);
            }
        }

        getProduct();
    }, []);

    // Is the product in the cart? Used to show Add To Cart or Quantity Selector
    const isInCart = cart.findIndex(p => p.product.id === product?.id) >= 0;

    // Add the product to cart - on click Add To Cart button
    const onAddToCart = () => {
        addToCart(product as Product);
    }

    // Toggle showing the full description
    const updateShowingDescription = () => {
        setShowingDescription(currentVal => !currentVal);
    }

    return {
        product,
        loading,
        showingDescription,
        onAddToCart,
        updateShowingDescription,
        isInCart,
    }
}