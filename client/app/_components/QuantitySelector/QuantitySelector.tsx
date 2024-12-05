import {Product} from "../../types";
import {useQuantitySelector} from "./talons/useQuantitySelector";
import {MinusIcon} from "../Icons/MinusIcon";
import {PlusIcon} from "../Icons/PlusIcon";

export interface QuantitySelectorProps {
    product: Product;
}

export const QuantitySelector = (props: QuantitySelectorProps) => {
    const {quantity, updateCart} = useQuantitySelector(props);

    return (
        <div className="flex gap-[20px] bg-[var(--coffee)] rounded-lg p-[10px] text-[var(--beige)]">
            <button className="text-[42px]" onClick={() => updateCart(props.product.id, quantity - 1)}>
                <MinusIcon widthClass="w-[15px]" heightClass="h-[15px]" color="var(--beige)" />
            </button>
            <p className="text-[20px]">{quantity}</p>
            <button className="text-[42px] leading-[42px]" onClick={() => updateCart(props.product.id, quantity + 1)}>
                <PlusIcon widthClass="w-[15px]" heightClass="h-[15px]" color="var(--beige)" />
            </button>
        </div>
    )
}