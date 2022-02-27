import Image from "next/image";
import React from "react";

function Section() {
    return (
        <div className="bg-secondary p-4 text-main">
            <div className="lg:container mx-auto  md:flex md:items-center">
                <div className="md:w-1/2">
                    <div className="relative w-full h-96 md:h-screen">
                        <Image
                            src="https://fleksa.com/wp-content/uploads/2021/09/Product-Menu-Illustration-01-768x768.png"
                            layout="fill"
                            className="absolute object-contain"
                        />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-5xl font-bold font-oswald">
                        Webshop And Apps
                    </h1>
                    <p className="text-xl my-4">
                        We know that running a restaurant is no easy feat, which
                        is why our team of experts are here to help! We’ll
                        provide you with the perfect website for your business
                        needs.
                    </p>
                    <p className="text-xl">
                        From online ordering and management tools all while
                        generating an attractive design within seconds – it’s
                        pretty incredible what we can do these days 🙂
                    </p>
                    <div className="my-4">
                        <p className="text-xl">Website with Online Ordering</p>
                        <p className="text-xl">Ordering App for Users</p>
                    </div>
                    <button className="bg-main text-black text-2xl font-bold font-oswald p-1  shadow-btn transition duration-300 ease-in-out border-2 border-black hover:shadow-none hover:text-main hover:bg-black hover:border-main">
                        LEARN MORE
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Section;
