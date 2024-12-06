import React, {useContext, useState} from "react";
import {CartContext} from "../../../_contextProviders/CartContextProvider";
import {useRouter} from "next/navigation";

export const useHeader = () => {
    const { cart } = useContext(CartContext);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const router = useRouter();

    let quantity = 0;

    // Get the total quantities of all items in the cart
    cart.forEach((item) => {
        quantity += item.quantity;
    })

    // Open/Close the search panel
    const toggleSearch = () => {
        setSearchOpen(isOpen => !isOpen);
    }

    // Update the search term
    const updateSearchTerm = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchTerm(e.currentTarget.value);
    }

    // When the user presses enter to search, handle it here
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            search();
        }
    }

    // Close the search panel and load the products page with the search term
    const search = () => {
        setSearchOpen(false);
        const term = searchTerm;
        setSearchTerm('');
        router.push(`/products?searchTerm=${term}`);
    }

    return {
        quantity,
        toggleSearch,
        searchOpen,
        searchTerm,
        search,
        onKeyDown,
        updateSearchTerm
    }
}