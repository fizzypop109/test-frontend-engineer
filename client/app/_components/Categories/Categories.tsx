"use client"

import Link from "next/link";
import {ArrowIcon} from "../Icons/ArrowIcon";
import {useCategories} from "./talons/useCategories";
import {CategoriesSkeleton} from "./CategoriesSkeleton";

export const Categories = () => {
    const { categories } = useCategories();

    return categories.length > 0 ? categories.map(category => (
        <Link href={`products?category=${category}`} key={category} className="h-[200px] lg:h-[350px] w-full bg-[var(--khaki)] rounded-lg relative">
            <img className="w-full h-full object-cover rounded-lg" src={`${category.replace(/'/g, '').replace(/ /g,"-")}.webp`} alt={`${category} image`}/>
            <div className="absolute flex gap-[10px] bottom-0 right-0 p-[10px] bg-[var(--coffee)] text-[var(--beige)] rounded-br-lg">
                SHOP {category.toUpperCase()}
                <ArrowIcon widthClass="w-[25px]" heightClass="h-[25px]" color="var(--beige)" />
            </div>
        </Link>
    )) : <CategoriesSkeleton />
}