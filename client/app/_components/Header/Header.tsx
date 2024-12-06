"use client"

import Link from "next/link";
import {CartIcon} from "../Icons/CartIcon";
import {useHeader} from "./talons/useHeader";
import {SearchIcon} from "../Icons/SearchIcon";
import {ArrowIcon} from "../Icons/ArrowIcon";

export const Header = () => {
    const { quantity, searchOpen, searchTerm, toggleSearch, search, onKeyDown, updateSearchTerm } = useHeader();

    return (
        <header className="w-[100vw] h-[var(--header-height)] px-8 sm:px-20 flex fixed top-0 left-0 bg-[var(--beige)] z-1">
            <div className="flex items-center w-full">
                <button onClick={toggleSearch}>
                    <SearchIcon widthClass="w-[30px]" heightClass="h-[30px]" color="var(--coffee)" />
                </button>

                <Link href="/" className="m-auto text-[var(--coffee)]">
                    <h1>FakeStore</h1>
                </Link>

                <div className="flex items-center">
                    <CartIcon widthClass="w-[30px]" heightClass="h-[30px]" color="var(--coffee)" />
                    { quantity > 0 && <p>{quantity}</p> }
                </div>
            </div>

            {searchOpen && (
                <div
                    className="absolute transition-all left-0 top-[100%] p-[var(--padding-page-mobile)] pt-0 bg-[var(--beige)] w-full">
                    <div className="bg-white w-full flex items-center">
                        <input onChange={updateSearchTerm} onKeyDown={onKeyDown} value={searchTerm} placeholder="Search..." type="text"
                               className="p-[10px] w-full bg-white"/>
                        <button onClick={search} className="px-[10px]">
                            <ArrowIcon widthClass="w-[20px]" heightClass="h-[20px]"/>
                        </button>
                    </div>
                </div>
            )}
        </header>

    )
}