"use client"

import Link from "next/link";
import {CartIcon} from "@/app/_components/CartIcon/CartIcon";

export const Header = () => {
    return (
        <header className="w-full h-[var(--header-height)] px-8 sm:px-20 flex items-center fixed top-0 left-0 bg-[var(--beige)] z-1">
            <Link href="/" className="m-auto">
                <h1>FakeStore</h1>
            </Link>

            <CartIcon widthClass="w-[30px]" heightClass="h-[30px]" color="var(--coffee)" />
        </header>
    )
}