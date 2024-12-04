"use client"

import {useCategoryMenu} from "@/app/_components/CategoryMenu/talons/useCategoryMenu";
import Link from "next/link";

export const CategoryMenu = () => {
    const { categories, loading } = useCategoryMenu();

    return loading ? <div>Loading...</div> :
        (
            <nav className="flex gap-[20px]">
                { categories.map((category) => <Link key={category} href={`/products?category=${category}`}>{category}</Link>)}
            </nav>
        );
}