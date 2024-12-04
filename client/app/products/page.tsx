"use client"

import {useProductPage} from "@/app/products/talons/useProductPage";

const ProductPage = () => {
    const { loading, products, category } = useProductPage();

    return loading ? <div>Loading...</div> : (
        <div className="">
            <main className="flex flex-col gap-[20px]">
                <h2 className="bg-[var(--coffee)] text-[var(--beige)] p-[10px] text-center rounded-lg">{category?.toUpperCase()}</h2>

                <div className="grid grid-cols-2 gap-[10px]">
                    {products.map((product) => (
                        <div key={product.id} className="flex flex-col items-center gap-[10px] text-[var(--bistre)]">
                            <img className="h-[150px]" src={product.image} alt={`image of ${product.title}`} />
                            <div className="flex flex-col gap-[5px] items-center">
                                <h5 className="text-center">{product.title}</h5>
                                <h5 className="font-bold">${product.price}</h5>
                                <p>{product.rating.rate}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default ProductPage;