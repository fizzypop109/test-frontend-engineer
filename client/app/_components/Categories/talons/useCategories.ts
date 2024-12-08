import {useContext} from "react";
import {CategoriesContext} from "../../../_contextProviders/CategoriesContextProvider";

export const useCategories = () => {
    const categories = useContext(CategoriesContext);

    return {
        categories
    }
}