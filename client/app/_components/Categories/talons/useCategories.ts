import {useContext} from "react";
import {CategoriesContext} from "../../../_contextProviders/CategoriesContextProvider";

export const useCategories = () => {
    const categories = useContext(CategoriesContext);

    const CATEGORIES_TOTAL = 6;

    return {
        categories,
        CATEGORIES_TOTAL
    }
}