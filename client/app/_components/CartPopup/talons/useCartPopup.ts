import {useContext} from "react";
import {CartContext} from "../../../_contextProviders/CartContextProvider";

export const useCartPopup = () => {
    const { cart, cartPopupOpen, toggleCartPopup, removeFromCart } = useContext(CartContext);

    let totalCost = 0;

    // Get the total cost of all the items in the cart
    cart.forEach((item) => {
        totalCost += (item.product.price * item.quantity);
    });

    return {
        totalCost,
        cart,
        cartPopupOpen,
        toggleCartPopup,
        removeFromCart
    }
}