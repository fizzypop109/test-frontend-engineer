import { useSearchParams } from 'next/navigation'
import {useEffect, useState} from "react";
import { Product } from '../../types';

export const useProductPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const searchParams = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const getProductsOfCategory = async () => {
            fetch(`https://fakestoreapi.com/products/category/${category}`)
                .then(res=>res.json())
                .then(json=> {
                    setLoading(false);
                    setProducts(json);
                })
        }

        getProductsOfCategory();
    }, []);

    return {
        products,
        loading,
        category
    }
}