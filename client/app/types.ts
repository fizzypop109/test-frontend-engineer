export interface Product {
    id: number;
    title: string;
    brand: string;
    category: string;
    color: string;
    description: string;
    discount: number;
    image: string;
    model: string;
    price: number;
}

export interface CartContext {
    cart: CartProduct[],
    addToCart: (value: Product) => void,
    removeFromCart: (id: number) => void,
    updateCart: (id: number, quantity: number) => void,
}

export interface CartProduct {
    product: Product,
    quantity: number;
}

export enum SortType {
    Alphabetical = "A-Z",
    PriceLowHigh = "Price: Low - High",
    PriceHighLow = "Price: High - Low"
}