"use client"

import {useSearchParams} from "next/navigation";
import {useContext, useEffect, useState} from "react";
import {Product} from "../../types";
import {CartContext} from "../../_contextProviders/CartContextProvider";

export const useProductPage = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [showingDescription, setShowingDescription] = useState(false);
    const { addToCart } = useContext(CartContext);

    const searchParams = useSearchParams();
    const productId = searchParams.get('id');

    useEffect(() => {
        const getProduct = async () => {
            fetch(`https://fakestoreapi.in/api/products/${productId}`)
                .then(res=>res.json())
                .then(json=> {
                    setLoading(false);
                    setProduct(json.product);
                })
        }

        getProduct();
    }, []);

    const onAddToCart = () => {
        addToCart(product as Product);
    }

    const updateShowingDescription = () => {
        setShowingDescription(currentVal => !currentVal);
    }

    return {
        product,
        loading,
        showingDescription,
        onAddToCart,
        updateShowingDescription
    }
}