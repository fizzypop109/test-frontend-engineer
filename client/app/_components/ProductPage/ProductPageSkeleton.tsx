import {BreadCrumb} from "../BreadCrumb/BreadCrumb";

const ProductPageSkeleton = () => {
    return (
        <main>
            <div className="flex flex-col gap-[10px] relative">
                <div className="flex gap-[10px] bg-[var(--beige)] mb-[10px]">
                    <BreadCrumb to="/" label="home"/>
                    <p className="loading">{'-> ... -> ...'}</p>
                </div>

                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-[10px] sm:gap-[20px]">
                            <div className="p-[20px] loading w-full h-[250px] sm:h-full bg-white rounded-lg flex items-center justify-center" />

                            <div className="flex flex-col loading gap-[10px]">
                                <h3>...</h3>
                                <h4 className="font-bold">$</h4>

                                <div className="flex items-center my-[20px]">
                                        <button className="w-full p-[10px] bg-[var(--coffee)] text-[var(--beige)] font-bold">
                                            ...
                                        </button>
                                </div>

                            </div>
                        </div>

                        <div>
                            <h6 className="font-bold my-[10px]">Description:</h6>
                            <p className="loading">...</p>
                        </div>
            </div>
        </main>
    )
}

export default ProductPageSkeleton;