"use client"

import Link from "next/link";
import {CartIcon} from "../CartIcon/CartIcon";
import {useHeader} from "./talons/useHeader";
export const Header = () => {
    const { quantity } = useHeader();

    return (
        <header
                className="w-[100vw] overflow-x-hidden h-[var(--header-height)] px-8 sm:px-20 flex items-center fixed top-0 left-0 bg-[var(--beige)] z-1">
                <Link href="/" className="m-auto text-[var(--coffee)]">
                <h1>FakeStore</h1>
                </Link>

                <CartIcon widthClass="w-[30px]" heightClass="h-[30px]" color="var(--coffee)" />
                <p>{quantity}</p>
        </header>

    )
}