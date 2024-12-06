"use client"

import React, {createContext, useState} from 'react';
import {CartContextObject, CartProduct, Product} from "../types";

// Used to store the items in the cart, the functions to update the cart, and whether the cart popup is open or not
export const CartContext = createContext<CartContextObject>(
    {
        cart: [],
        cartPopupOpen: false,
        toggleCartPopup: () => {},
        addToCart: () => {},
        updateCart: () => {},
        removeFromCart: () => {},
    });

export interface CartContextProviderProps {
    children: React.ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [cart, setCart] = useState<CartProduct[]>([]);
    const [cartPopupOpen, setCartPopupOpen] = useState(false);

    // Toggle the cart popup
    const toggleCartPopup = () => {
        setCartPopupOpen(isOpen => !isOpen);
    }

    // Update the quantity of a given product in the cart. If it's 0, remove it
    const updateCart = (id: number, quantity: number) => {
        const tempCart = [...cart];

        if (quantity <= 0) {
            removeFromCart(id);
            return;
        }

        const index = tempCart.findIndex(p => p.product.id === id);
        tempCart[index].quantity = quantity;

        setCart(tempCart);
    }

    // Add a given product to the cart
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

    // Remove a given product from the cart
    const removeFromCart = (id: number) => {
        const tempCart = [...cart];
        const index = tempCart.findIndex(p => p.product.id === id);
        tempCart.splice(index, 1);
        setCart(tempCart);
    }

    return (
        <CartContext.Provider value={{ cart, cartPopupOpen, addToCart, removeFromCart, updateCart, toggleCartPopup }}>
            {children}
        </CartContext.Provider>
    );
};