import {useSearchParams} from 'next/navigation'
import React, {useEffect, useState} from "react";
import {Product, SortType} from '../../../types';
import {sort} from "next/dist/build/webpack/loaders/css-loader/src/utils";

export const useProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [productsToShow, setProductsToShow] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [sortType, setSortType] = useState<SortType>(SortType.Alphabetical);
    const [page, setPage] = useState(1);
    const [moreProducts, setMoreProducts] = useState<boolean>(true);

    const PRODUCTS_PER_PAGE = 10;

    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const searchTerm = searchParams.get('searchTerm');

    useEffect(() => {
        if (category !== null) {
            const getProductsOfCategory = async () => {
                fetch(`https://fakestoreapi.in/api/products/category?type=${category}`)
                    .then(res=>res.json())
                    .then(json=> {
                        // Get first 10
                        const sortedProducts = sortProducts(json.products);
                        setProducts(sortedProducts);
                        const firstTen = sortedProducts.slice(0, 10);
                        setLoading(false);
                        setProductsToShow(firstTen);
                        setMoreProducts(sortedProducts.length > firstTen.length);
                    })
            }

            getProductsOfCategory();
        } else if (searchTerm !== null) {
            const getProductsMatchingSearch = async () => {
                fetch("https://fakestoreapi.in/api/products")
                    .then(res => res.json())
                    .then(json => {
                        const results = json.products.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm.toLowerCase().includes(p.category.toLowerCase()));
                        const sortedResults = sortProducts(results);
                        setProducts(sortedResults);
                        const firstTen = sortedResults.slice(0, 10);
                        setLoading(false);
                        setProductsToShow(firstTen);
                        setMoreProducts(sortedResults.length > firstTen.length);
                    })
            }

            getProductsMatchingSearch();
        }
    }, [category, searchTerm]);

    useEffect(() => {
        const sortedProducts = sortProducts(products);
        setProducts(sortedProducts);
        setProductsToShow(sortedProducts.slice(0, page * PRODUCTS_PER_PAGE));
    }, [sortType]);

    const loadMore = () => {
        const currentPage = page + 1;
        const newProductsToShow = products.slice(0, currentPage * PRODUCTS_PER_PAGE);
        setProductsToShow(newProductsToShow);
        setPage(currentPage);
        setMoreProducts(products.length > newProductsToShow.length);
    }

    const onScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

        if (bottom && products.length > productsToShow.length) {
            loadMore();
        }
    }

    const sortProducts = (productsToSort: Product[]) => {
        const productsTemp = [...productsToSort];

        let sortedProducts = [];

        if (sortType === SortType.Alphabetical) {
            sortedProducts = productsTemp.sort((a, b) => {
                if (a.title < b.title) {
                    return -1;
                }
                if (a.title > b.title) {
                    return 1;
                }
                return 0;
            });
        } else if (sortType === SortType.PriceLowHigh) {
            sortedProducts = productsTemp.sort((a, b) => {
                if (a.price < b.price) {
                    return -1;
                }
                if (a.price > b.price) {
                    return 1;
                }
                return 0;
            });
        } else if (sortType === SortType.PriceHighLow) {
            sortedProducts = productsTemp.sort((a, b) => {
                if (a.price > b.price) {
                    return -1;
                }
                if (a.price < b.price) {
                    return 1;
                }
                return 0;
            });
        }

        return sortedProducts;
    }

    const onSortChange = (e: React.FormEvent<HTMLSelectElement>) => {
        setSortType(e.currentTarget.value as SortType);
    }

    return {
        productsToShow,
        loading,
        category,
        searchTerm,
        moreProducts,
        onSortChange,
        onScroll
    }
}