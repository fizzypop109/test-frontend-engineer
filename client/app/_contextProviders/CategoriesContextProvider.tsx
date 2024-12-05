"use client"

import React, {createContext, useEffect, useState} from 'react';

export const CategoriesContext = createContext<string[]>([]);

export interface CategoriesContextProviderProps {
    children: React.ReactNode;
}

export const CategoriesContextProvider = ({ children }: CategoriesContextProviderProps) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            fetch('https://fakestoreapi.in/api/products/category')
                .then(res=>res.json())
                .then(json=>{
                    setCategories(json.categories);
                })
        }

        getCategories();
    }, []);

    return (
        <CategoriesContext.Provider value={categories}>
            {children}
        </CategoriesContext.Provider>
    );
};