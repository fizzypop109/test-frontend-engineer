import type {Metadata, Viewport} from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Root } from './_components/Root/Root'
import {CartContextProvider} from "./_contextProviders/CartContextProvider";
import {CategoriesContextProvider} from "./_contextProviders/CategoriesContextProvider";

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
  title: "FakeStore",
  description: "The fakest one-stop shop for all your electronic needs!",
};

export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${magicalNordic.variable} ${geo.variable} antialiased scrollable overflow-x-hidden`}
      >
      <CartContextProvider>
          <CategoriesContextProvider>
              <Root>
                  {children}
              </Root>
          </CategoriesContextProvider>
      </CartContextProvider>
      </body>
    </html>
  );
}
