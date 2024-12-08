"use client"

import {Header} from "../Header/Header";
import {CartPopup} from "../CartPopup/CartPopup";
import React from "react";
import classNames from "classnames";
import {useRoot} from "./talons/useRoot";

export const Root = ({children}: Readonly<{children: React.ReactNode;}>) => {
    const { cartPopupOpen } = useRoot();

    return (
        <div className={classNames("relative min-h-[100svh] w-[100vw] overflow-hidden p-[var(--padding-page-mobile)] sm:p-[var(--padding-page-desktop)] !pt-[var(--header-height)]", cartPopupOpen ? 'h-[100svh]' : '')}>
            <Header />
            <CartPopup />
            {children}
        </div>
    )
}