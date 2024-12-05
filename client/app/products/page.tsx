"use client"

import {useProductPage} from "./talons/useProductPage";
import Link from "next/link";
import {SortType} from "../types";

const ProductPage = () => {
    const { loading, products, category, onSortChange } = useProductPage();

    return loading ? <div>Loading...</div> : (
        <div className="">
            <main className="flex flex-col gap-[20px]">
                <div className="bg-[var(--coffee)] text-[var(--beige)] p-[10px] text-center rounded-lg flex justify-between">
                    <h2>{category?.toUpperCase()}</h2>
                    <select name="sorting" onChange={onSortChange}>
                        <option value={SortType.Alphabetical}>{SortType.Alphabetical}</option>
                        <option value={SortType.PriceLowHigh}>{SortType.PriceLowHigh}</option>
                        <option value={SortType.PriceHighLow}>{SortType.PriceHighLow}</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-between gap-[10px] sm:gap-[20px]">
                    {products.map((product) => (
                        <Link href={`product?id=${product.id}`} key={product.id} className="flex flex-col items-center gap-[10px] text-[var(--bistre)] sm:w-[150px]">
                            <div className="h-[150px] w-full rounded-lg p-[10px] bg-white">
                                <img className="h-full w-full object-contain" src={product.image}
                                     alt={`image of ${product.title}`}/>
                            </div>
                            <div className="flex flex-col gap-[5px] items-center">
                                <h5 className="text-center">{product.title}</h5>
                                <h5 className="font-bold">${product.price}</h5>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default ProductPage;