"use client"

import classNames from "classnames";
import {useCartPopup} from "./talons/useCartPopup";

export const CartPopup = () => {
    const { totalCost, cart, cartPopupOpen, toggleCartPopup } = useCartPopup();

    return (
        <div
            className={classNames("w-full h-full bg-white absolute transition-all top-0 z-2 p-[var(--padding-page-mobile)] sm:p-[var(--padding-page-desktop)]", cartPopupOpen ? 'right-0' : 'right-[-100%]')}>
            <div className="flex justify-between items-center mb-[20px]">
                <h2>Cart</h2>
                <button onClick={toggleCartPopup}>X</button>
            </div>

            <div className="flex flex-col w-full gap-[20px]">
                {cart.map(p => (
                    <div key={p.product.id} className="flex gap-[10px]">
                        <img className="h-[100px]" src={p.product.image}/>
                        <div>
                            <p>{p.product.title}</p>
                            <p className="font-bold">${p.product.price}</p>
                        </div>
                        {p.quantity}
                    </div>
                ))}
            </div>

            <h2>Total: ${totalCost}</h2>
        </div>
    )
}