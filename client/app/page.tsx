"use client"

import {useContext} from "react";
import {CategoriesContext} from "./_contextProviders/CategoriesContextProvider";
import {useScreenDetector} from "./_hooks/useScreenDetector";
import {ArrowIcon} from "./_components/ArrowIcon/ArrowIcon";
import Link from "next/link";

export default function Home() {
  const categories = useContext(CategoriesContext);
  const {isMobile} = useScreenDetector();

  return (
    <div className="">
      <div className={isMobile ? 'flex flex-col gap-[20px]' : 'grid grid-cols-2 gap-[20px]'}>
        { categories.map(category => (
            <Link href={`products?category=${category}`} key={category} className="h-[200px] lg:h-[350px] w-full relative">
              <img className="w-full h-full object-cover rounded-lg" src={`${category.replace(/'/g, '').replace(/ /g,"-")}.webp`} alt={`${category} image`}/>
                <div className="absolute flex gap-[10px] bottom-0 right-0 p-[10px] bg-[var(--coffee)] text-[var(--beige)] rounded-br-lg">
                    SHOP {category.toUpperCase()}
                    <ArrowIcon widthClass="w-[25px]" heightClass="h-[25px]" color="var(--beige)" />
                </div>
            </Link>
        ))}
      </div>
    </div>
  );
}
