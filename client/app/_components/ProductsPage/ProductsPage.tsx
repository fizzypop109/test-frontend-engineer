"use client"

import {useProductPage} from "./talons/useProductPage";
import Link from "next/link";
import {SortType} from '../../types'
import {ArrowIcon} from "../../_components/Icons/ArrowIcon";
import classNames from "classnames";
import classes from './ProductsPage.module.scss'

const ProductsPage = () => {
    const { loading, products, category, onSortChange } = useProductPage();

    return loading ? <div>Loading...</div> : (
        <div className={classNames("flex relative flex-col gap-[20px] overflow-hidden", classes.page)}>
            <div className="bg-[var(--beige)] flex flex-col gap-[20px]">
                <Link href="/" className="flex gap-[10px] items-center">
                    <div className="rotate-180">
                        <ArrowIcon widthClass="w-[20px]" heightClass="h-[20px]" color="var(--coffee)" />
                    </div>
                    BACK TO HOME
                </Link>

                <div className="bg-[var(--coffee)] text-[var(--beige)] py-[10px] px-[20px] text-center rounded-lg flex justify-between">
                    <h3>{category?.toUpperCase()}</h3>
                    <select className="text-[var(--coffee)]" name="sorting" onChange={onSortChange}>
                        <option value={SortType.Alphabetical}>{SortType.Alphabetical}</option>
                        <option value={SortType.PriceLowHigh}>{SortType.PriceLowHigh}</option>
                        <option value={SortType.PriceHighLow}>{SortType.PriceHighLow}</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:flex h-full overflow-y-scroll scrollable sm:pr-[15px] sm:flex-wrap sm:justify-between gap-[10px] sm:gap-[20px]">
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
        </div>
    );
}

export default ProductsPage;