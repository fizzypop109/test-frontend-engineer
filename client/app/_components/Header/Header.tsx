"use client"

import {CategoryMenu} from "@/app/_components/CategoryMenu/CategoryMenu";
import {useScreenDetector} from "@/app/_hooks/useScreenDetector";
import {MobileMenu} from "@/app/_components/MobileMenu/MobileMenu";

export const Header = () => {
    const { isMobile, isTablet, isDesktop } = useScreenDetector();

    return (
        <header className="w-full">
            {isMobile ? (
                <div className="flex justify-between items-center">
                    <MobileMenu/>
                    <h1>FakeStore</h1>
                    <div>
                        icons
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-[10px] items-center">
                    <h1>FakeStore</h1>
                    <CategoryMenu />
                </div>
            )}
        </header>
    )
}