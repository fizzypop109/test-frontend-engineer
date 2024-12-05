import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {CategoriesContextProvider} from "./_contextProviders/CategoriesContextProvider";
import {Header} from "./_components/Header/Header";
import {CartContextProvider} from "./_contextProviders/CartContextProvider";
import {CartPopup} from "./_components/CartPopup/CartPopup";

const magicalNordic = localFont({
  src: "./fonts/MagicalNordic.otf",
  variable: "--font-magical-nordic",
  weight: "400",
});
const geo = localFont({
  src: "./fonts/GeosansLight.ttf",
  variable: "--font-geo",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${magicalNordic.variable} ${geo.variable} antialiased p-[var(--padding-page-mobile)] sm:p-[var(--padding-page-desktop)] pt-[var(--header-height)]`}
      >
      <CartContextProvider>
          <CategoriesContextProvider>
              <Header />
              <CartPopup />
              {children}
          </CategoriesContextProvider>
      </CartContextProvider>
      </body>
    </html>
  );
}
