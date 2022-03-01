import Image from "next/image";
import React from "react";

function Product({ title, description, imgUrl }) {
    return (
        <div>
            <div className="relative w-full h-48">
                <Image
                    src={imgUrl}
                    layout="fill"
                    className="absolute object-contain"
                />
            </div>
            <div>
                <h1 className="text-main text-2xl font-oswald">{title}</h1>
                <p className="text-xl text-white my-4">{description}</p>
                <button className="bg-main font-oswald font-bold px-4 py-3 ml-5 shadow-btn transition duration-300 ease-in-out border-2 border-black hover:shadow-none hover:text-main hover:bg-black hover:border-main">
                    LEARN MORE
                </button>
            </div>
        </div>
    );
}

export default Product;
