import {useProductsPage} from "./talons/useProductsPage";

export const ProductsPageSkeleton = () => {
    const { PRODUCTS_PER_PAGE } = useProductsPage();

    return [...Array(PRODUCTS_PER_PAGE)].map((e, i) =>
        <div
            key={`skeleton-${i}`}
            className="flex loading flex-col items-center gap-[10px] text-[var(--bistre)] w-full sm:w-[150px]">
            <div className="h-[150px] w-full rounded-lg p-[10px] bg-white"/>
            <div className="flex flex-col gap-[5px] items-center">
                <h5 className="text-center break-all">...</h5>
                <h5 className="font-bold">...</h5>
            </div>
        </div>
    )
}