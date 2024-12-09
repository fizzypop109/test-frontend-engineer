import {useCategories} from "./talons/useCategories";

export const CategoriesSkeleton = () => {
    const { CATEGORIES_TOTAL } = useCategories();

    return [...Array(CATEGORIES_TOTAL)].map((e, i) =>
        <div key={`skeleton-${i}`} className="h-[200px] lg:h-[350px] w-full bg-[var(--khaki)] rounded-lg relative loading" />
    );
}