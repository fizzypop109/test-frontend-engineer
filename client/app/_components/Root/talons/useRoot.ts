import {useContext} from "react";
import {CartContext} from "../../../_contextProviders/CartContextProvider";

export const useRoot = () => {
    const { cartPopupOpen } = useContext(CartContext);

    return {
        cartPopupOpen
    }
}