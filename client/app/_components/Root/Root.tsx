"use client"

import {CartContext} from "../../_contextProviders/CartContextProvider";
import {Header} from "../Header/Header";
import {CartPopup} from "../CartPopup/CartPopup";
import React, {useContext} from "react";
import classNames from "classnames";

export const Root = ({
                         children,
                     }: Readonly<{
    children: React.ReactNode;
}>) => {
    const { cartPopupOpen } = useContext(CartContext);

    return (
                <div className={classNames("relative min-h-[100svh] w-[100vw] overflow-hidden p-[var(--padding-page-mobile)] sm:p-[var(--padding-page-desktop)] !pt-[var(--header-height)]", cartPopupOpen ? 'h-[100svh]' : '')}>
                    <Header />
                    <CartPopup />
                    {children}
                </div>
    )
}