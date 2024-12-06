import {useSearchParams} from 'next/navigation'
import React, {useEffect, useRef, useState} from "react";
import {Product, SortType} from '../../../types';

export const useProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [productsToShow, setProductsToShow] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [sortType, setSortType] = useState<SortType>(SortType.Alphabetical);
    const [page, setPage] = useState(1);
    const [moreProducts, setMoreProducts] = useState<boolean>(true);

    // Load 20 products at a time
    const PRODUCTS_PER_PAGE = 20;

    // Scroll buffer to allow infinite scrolling to work on mobile (and not require user to scroll perfectly to bottom)
    const SCROLL_BUFFER = 15;

    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const searchTerm = searchParams.get('searchTerm');

    // On first load - if loaded with a category, get products in that category.
    // If loaded with a searchTerm, get products that match (category or title)
    // Sort them alphabetically to start with, and show 10
    useEffect(() => {
        if (category !== null) {
            const getProductsOfCategory = async () => {
                fetch(`https://fakestoreapi.in/api/products/category?type=${category}`)
                    .then(res=>res.json())
                    .then(json=> {
                        // Get first 20
                        const sortedProducts = sortProducts(json.products);
                        setProducts(sortedProducts);
                        const firstTwenty = sortedProducts.slice(0, 20);
                        setLoading(false);
                        setProductsToShow(firstTwenty);
                        setMoreProducts(sortedProducts.length > firstTwenty.length);
                    })
            }

            getProductsOfCategory();
        } else if (searchTerm !== null) {
            const getProductsMatchingSearch = async () => {
                fetch("https://fakestoreapi.in/api/products")
                    .then(res => res.json())
                    .then(json => {
                        const results = json.products.filter((p: Product) => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm.toLowerCase().includes(p.category.toLowerCase()));
                        const sortedResults = sortProducts(results);
                        setProducts(sortedResults);
                        const firstTwenty = sortedResults.slice(0, 20);
                        setLoading(false);
                        setProductsToShow(firstTwenty);
                        setMoreProducts(sortedResults.length > firstTwenty.length);
                    })
            }

            getProductsMatchingSearch();
        }
    }, [category, searchTerm]);

    // When the sorting dropdown is changed, sort the products depending on selection
    useEffect(() => {
        const sortedProducts = sortProducts(products);
        setProducts(sortedProducts);
        setProductsToShow(sortedProducts.slice(0, page * PRODUCTS_PER_PAGE));
    }, [sortType]);

    // When the user scrolls to the bottom, if there are more products to load, do so
    const loadMore = () => {
        const currentPage = page + 1;
        const newProductsToShow = products.slice(0, currentPage * PRODUCTS_PER_PAGE);
        setProductsToShow(newProductsToShow);
        setPage(currentPage);
        setMoreProducts(products.length > newProductsToShow.length);
    }

    // Runs when the user scrolls the products, checks if they've reached the 'bottom' and loads more if so
    const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop <= (e.currentTarget.clientHeight + SCROLL_BUFFER);

        if (bottom && products.length > productsToShow.length) {
            loadMore();
        }
    }

    // Sort the products depending on selection in dropdown
    const sortProducts = (productsToSort: Product[]) => {
        const productsTemp = [...productsToSort];

        let sortedProducts: Product[] = [];

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

    // Triggers when the dropdown is changed
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