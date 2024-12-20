"use client"

import {useProductsPage} from "./talons/useProductsPage";
import Link from "next/link";
import {SortType} from '../../types'
import classNames from "classnames";
import classes from './ProductsPage.module.scss'
import {BreadCrumb} from "../BreadCrumb/BreadCrumb";
import {ProductsPageSkeleton} from "./ProductsPageSkeleton";

const ProductsPage = () => {
    const { loading, productsToShow, moreProducts, category, searchTerm, onSortChange, onScroll } = useProductsPage();

    const innerContent = loading ? <ProductsPageSkeleton />
        : productsToShow.length <= 0 ? (
        <div className="mx-auto">No products found</div>
    ) : productsToShow?.map((product) => (
        <Link href={`product?id=${product.id}`} key={product.id}
              className="flex flex-col items-center gap-[10px] text-[var(--bistre)] sm:w-[150px]">
            <div className="h-[150px] w-full rounded-lg p-[10px] bg-white">
                <img className="h-full w-full object-contain" src={product.image}
                     alt={`image of ${product.title}`}/>
            </div>
            <div className="flex flex-col gap-[5px] items-center">
                <h5 className="text-center break-all">{product.title}</h5>
                <h5 className="font-bold">${product.price}</h5>
            </div>
        </Link>
    ));

    return (
        <div className={classNames("flex relative flex-col gap-[20px] overflow-hidden", classes.page)}>
            <div className="bg-[var(--beige)] flex flex-col gap-[20px]">
                <div className="flex gap-[10px] bg-[var(--beige)]">
                    <BreadCrumb to="/" label="home"/>
                    <p>{'->'}</p>
                    <BreadCrumb to={`products?category=${category}`} label={category as string}/>
                </div>

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

            <div className={classNames("h-full scrollable flex flex-col items-center gap-[20px]", loading || productsToShow.length <= 0 ? 'overflow-hidden' : 'overflow-y-scroll')}
                 onScroll={onScroll}>
                <div
                    className="grid grid-cols-2 w-full sm:flex sm:pr-[15px] sm:flex-wrap sm:justify-between gap-[10px] sm:gap-[20px]">
                    { innerContent }
                </div>

                {moreProducts && <h3 className="m-auto">Loading...</h3>}
            </div>
        </div>
    );
}

export default ProductsPage;