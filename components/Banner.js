import Image from "next/image";
import React from "react";

function Banner() {
    return (
        <div className="p-4 md:flex md:items-center md:h-screen lg:container lg:mx-auto">
            <div className="md:w-1/2">
                <h1 className="text-6xl font-bold font-oswald">
                    <p className="mt-2">ALL-IN-ONE SOLUTION</p>
                    <p className="mt-4">FOR RESTAURANTS</p>
                </h1>
                <p className="text-2xl my-4">
                    Need a webshop with an ordering app for pickup, delivery, or
                    dine-in? We’ve got you covered.
                </p>
                <button className="bg-main text-2xl font-bold font-oswald px-8 py-4  shadow-btn transition duration-300 ease-in-out border-2 border-black hover:shadow-none hover:text-main hover:bg-black">
                    GET STARTED
                </button>
            </div>
            <div className="md:w-1/2">
                <div className="relative w-full h-96">
                    <Image
                        src="https://fleksa.com/wp-content/uploads/2021/11/Group-1323-e1636256752693-768x360.png"
                        layout="fill"
                        className="absolute object-contain"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;
