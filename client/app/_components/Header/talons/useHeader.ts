import React, {useContext, useState} from "react";
import {CartContext} from "../../../_contextProviders/CartContextProvider";
import {useRouter} from "next/navigation";

export const useHeader = () => {
    const { cart } = useContext(CartContext);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const router = useRouter();

    let quantity = 0;

    cart.forEach((item) => {
        quantity += item.quantity;
    })

    const toggleSearch = () => {
        setSearchOpen(isOpen => !isOpen);
    }

    const updateSearchTerm = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchTerm(e.currentTarget.value);
    }

    const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setSearchOpen(false);
            router.push(`/products?searchTerm=${searchTerm}`);
        }
    }

    return {
        quantity,
        toggleSearch,
        searchOpen,
        searchTerm,
        search,
        updateSearchTerm
    }
}