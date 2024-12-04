"use client"

import Link from "next/link";
import {useContext} from "react";
import {CategoriesContext} from "@/app/_contextProviders/CategoriesContextProvider";

export const CategoryMenu = () => {
    const categories = useContext(CategoriesContext);

    return categories.length <= 0 ? <div>Loading...</div> :
        (
            <nav className="flex gap-[20px]">
                { categories.map((category) => <Link key={category} href={`/products?category=${category}`}>{category}</Link>)}
            </nav>
        );
}