"use client"

import React, {createContext, useState} from 'react';
import {CartContext, CartProduct, Product} from "../types";

export const CartContext = createContext<CartContext>(
    {
        cart: [],
        addToCart: () => {},
        updateCart: () => {},
        removeFromCart: () => {},
    });

export interface CartContextProviderProps {
    children: React.ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [cart, setCart] = useState<CartProduct[]>([]);

    const updateCart = (id: number, quantity: number) => {
        const tempCart = [...cart];
        const index = tempCart.findIndex(p => p.product.id === id);
        tempCart[index].quantity = quantity;

        setCart(tempCart);
    }

    const addToCart = (newProduct: Product) => {
        const tempCart = [...cart];

        const index = tempCart.findIndex(p => p.product.id == newProduct.id);

        if (index >= 0) {
            const productInCart = tempCart[index];
            updateCart(productInCart.product.id, productInCart.quantity + 1)
        } else {
            tempCart.push({ product: newProduct, quantity: 1 });
        }

        setCart(tempCart);
    }

    const removeFromCart = (id: number) => {
        const tempCart = [...cart];
        const index = tempCart.findIndex(p => p.product.id === id);
        tempCart.splice(index, 1);
        setCart(tempCart);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCart }}>
            {children}
        </CartContext.Provider>
    );
};