import {QuantitySelectorProps} from "../QuantitySelector";
import {useContext} from "react";
import {CartContext} from "../../../_contextProviders/CartContextProvider";

export const useQuantitySelector = (props: QuantitySelectorProps) => {
    const { cart, updateCart } = useContext(CartContext);

    const quantity = cart.find(p => p.product.id == props.product.id)?.quantity || 0;

    return {
        quantity,
        updateCart
    }
}