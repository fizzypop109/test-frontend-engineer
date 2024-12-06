"use client"

import React, {createContext, useEffect, useState} from 'react';

// Used to store the categories so we only need to load them once per use
export const CategoriesContext = createContext<string[]>([]);

export interface CategoriesContextProviderProps {
    children: React.ReactNode;
}

export const CategoriesContextProvider = ({ children }: CategoriesContextProviderProps) => {
    const [categories, setCategories] = useState([]);

    // On first load, get all the categories from the API
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