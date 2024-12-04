import {useEffect, useState} from "react";

export const useCategoryMenu = () => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            fetch('https://fakestoreapi.com/products/categories')
                .then(res=>res.json())
                .then(json=>{
                    setCategories(json);
                    setLoading(false);
                })
        }

        getCategories();
    }, []);

    return {
        categories,
        loading
    }
}