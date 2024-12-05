import { useSearchParams } from 'next/navigation'
import React, {useEffect, useState} from "react";
import {Product, SortType} from '../../types';

export const useProductPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const searchParams = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const getProductsOfCategory = async () => {
            fetch(`https://fakestoreapi.in/api/products/category?type=${category}`)
                .then(res=>res.json())
                .then(json=> {
                    setLoading(false);
                    setProducts(json.products);
                })
        }

        getProductsOfCategory();
    }, []);

    const onSortChange = (e: React.FormEvent<HTMLSelectElement>) => {
        const sortType = e.currentTarget.value as SortType;
        const productTemp = [...products];

        if (sortType === SortType.Alphabetical) {
            const sortedProducts = productTemp.sort((a, b) => {
                if (a.title < b.title) {
                    return -1;
                }
                if (a.title > b.title) {
                    return 1;
                }
                return 0;
            });

            setProducts(sortedProducts);
        } else if (sortType === SortType.PriceLowHigh) {
            const sortedProducts = productTemp.sort((a, b) => {
                if (a.price < b.price) {
                    return -1;
                }
                if (a.price > b.price) {
                    return 1;
                }
                return 0;
            });

            setProducts(sortedProducts);
        } else if (sortType === SortType.PriceHighLow) {
            const sortedProducts = productTemp.sort((a, b) => {
                if (a.price > b.price) {
                    return -1;
                }
                if (a.price < b.price) {
                    return 1;
                }
                return 0;
            });

            setProducts(sortedProducts);
        }
    }

    return {
        products,
        loading,
        category,
        onSortChange
    }
}