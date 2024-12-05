import {Product} from "../../types";
import {useQuantitySelector} from "./talons/useQuantitySelector";

export interface QuantitySelectorProps {
    product: Product;
}

export const QuantitySelector = (props: QuantitySelectorProps) => {
    const {quantity, updateCart} = useQuantitySelector(props);

    return (
        <div className="flex gap-[20px] bg-[var(--coffee)] rounded-lg p-[10px] text-[var(--beige)]">
            <button onClick={() => updateCart(props.product.id, quantity - 1)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => updateCart(props.product.id, quantity + 1)}>+</button>
        </div>
    )
}