"use client"

import classNames from "classnames";
import {useCartPopup} from "./talons/useCartPopup";
import classes from './CartPopup.module.scss'
import {CloseIcon} from "../Icons/CloseIcon";
import {QuantitySelector} from "../QuantitySelector/QuantitySelector";

export const CartPopup = () => {
    const { totalCost, cart, cartPopupOpen, toggleCartPopup, removeFromCart } = useCartPopup();

    return (
        <div
            className={classNames("w-full lg:w-[50%] h-[100svh] flex flex-col gap-[20px] fixed bg-white transition-all top-0 z-2 p-[var(--padding-page-mobile)] sm:p-[var(--padding-page-desktop)]", cartPopupOpen ? 'right-0' : 'right-[-100%]')}>
            <div className="flex justify-between items-center h-[var(--header-height)]">
                <h1>Cart</h1>
                <button onClick={toggleCartPopup}>
                    <CloseIcon widthClass="w-[25px]" heightClass="h-[25px]" color="var(--coffee)" />
                </button>
            </div>

            <div className={classNames("overflow-y-scroll flex flex-col gap-[20px] sm:pr-[15px]", classes.products)}>
                <div className="flex flex-col w-full gap-[20px]">
                    {cart.length == 0 && (
                        <p>There are no products in your cart yet!</p>
                    )}
                    {cart.map(p => (
                        <div>
                            <div key={p.product.id} className="flex gap-[10px] items-start justify-between">
                                <img className="h-[100px] w-[100px] min-w-[100px] min-h-[100px] object-contain" src={p.product.image} alt={`image for ${p.product.title}`}/>
                                <div className="flex flex-col gap-[5px] items-start">
                                    <p>{p.product.title}</p>
                                    <p className="font-bold">${p.product.price}</p>

                                    <QuantitySelector product={p.product} />
                                </div>

                                <button onClick={() => removeFromCart(p.product.id)}>
                                    <CloseIcon widthClass="min-w-[20px]" heightClass="h-[20px]" color="var(--coffee)"/>
                                </button>
                            </div>

                            <div className="w-full h-[1px] my-[15px] bg-[var(--coffee)]"/>
                        </div>
                    ))}
                </div>

                <h2 className="flex justify-between w-full">Total: <b>${totalCost}</b></h2>

                <button className="bg-[var(--khaki)] text-[var(--beige)] p-[10px] w-full font-bold" disabled>Checkout
                    Coming
                    Soon!
                </button>
            </div>
        </div>
    )
}