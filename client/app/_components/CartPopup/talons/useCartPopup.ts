import {useContext} from "react";
import {CartContext} from "../../../_contextProviders/CartContextProvider";

export const useCartPopup = () => {
    const { cart, cartPopupOpen, toggleCartPopup } = useContext(CartContext);

    let totalCost = 0;

    cart.forEach((item) => {
        totalCost += (item.product.price * item.quantity);
    });

    return {
        totalCost,
        cart,
        cartPopupOpen,
        toggleCartPopup
    }
}