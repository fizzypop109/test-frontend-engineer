import {useContext} from "react";
import {CartContext} from "../../../_contextProviders/CartContextProvider";

export const useHeader = () => {
    const { cart } = useContext(CartContext);

    let quantity = 0;

    cart.forEach((item) => {
        quantity += item.quantity;
    })

    return {
        quantity
    }
}