"use client"

import {useProductsPage} from "./talons/useProductsPage";
import Link from "next/link";
import {SortType} from '../../types'
import classNames from "classnames";
import classes from './ProductsPage.module.scss'
import {BreadCrumb} from "../BreadCrumb/BreadCrumb";

const ProductsPage = () => {
    const { loading, productsToShow, moreProducts, category, searchTerm, onSortChange, onScroll } = useProductsPage();

    return (
        <div className={classNames("flex relative flex-col gap-[20px] overflow-hidden", classes.page)}>
            <div className="bg-[var(--beige)] flex flex-col gap-[20px]">
                <BreadCrumb to="/" label="home" />

                <div
                    className="bg-[var(--coffee)] text-[var(--beige)] py-[10px] px-[20px] text-center rounded-lg flex justify-between">
                    <h4 className="text-left">{category ? category.toUpperCase() : searchTerm ? `RESULTS FOR: ${searchTerm.toUpperCase()}` : ''}</h4>
                    <select className="text-[var(--coffee)]" name="sorting" onChange={onSortChange}>
                        <option value={SortType.Alphabetical}>{SortType.Alphabetical}</option>
                        <option value={SortType.PriceLowHigh}>{SortType.PriceLowHigh}</option>
                        <option value={SortType.PriceHighLow}>{SortType.PriceHighLow}</option>
                    </select>
                </div>
            </div>

            { loading ? <div>Loading...</div> : productsToShow.length > 0 ? (
                <div className="h-full overflow-y-scroll scrollable flex flex-col gap-[20px]" onScroll={onScroll}>
                    <div
                        className="grid grid-cols-2 sm:flex sm:pr-[15px] sm:flex-wrap sm:justify-between gap-[10px] sm:gap-[20px]">
                        {productsToShow?.map((product) => (
                            <Link href={`product?id=${product.id}`} key={product.id}
                                  className="flex flex-col items-center gap-[10px] text-[var(--bistre)] sm:w-[150px]">
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

                    {moreProducts && <h3 className="m-auto">Loading...</h3>}
                </div>
            ) : (
                <div className="mx-auto">No products found</div>
            )}
        </div>
    );
}

export default ProductsPage;