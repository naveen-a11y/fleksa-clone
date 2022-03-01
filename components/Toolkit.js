import Image from "next/image";
import React, { useState } from "react";

function Toolkit() {
    return (
        <div className="p-4 text-center">
            <h1 className="text-5xl font-bold font-oswald">
                Restaurant Marketing Toolkit
            </h1>
            <p className="text-xl my-8 max-w-3xl m-auto">
                Increase revenue by directing traffic to your restaurant and
                away from outside third-party services with our all in one
                restaurant marketing toolkit, designed to increase the reach of
                your restaurants and create a pool of loyal customers.
            </p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="mx-auto bg-main text-2xl font-bold font-oswald px-8 py-4  hover:shadow-btn transition duration-300 ease-in-out hover:border-2 hover:border-black">
                    <div className="relative w-full h-16">
                        <Image
                            src="https://fleksa.com/wp-content/uploads/2021/11/Group-1282-e1636261706525.png"
                            layout="fill"
                            className="absolute object-contain"
                        />
                    </div>
                    <h1 className="text-xl font-bold font-oswald">
                        Social Media
                    </h1>
                </div>
                <div className="mx-auto bg-main text-2xl font-bold font-oswald px-8 py-4  hover:shadow-btn transition duration-300 ease-in-out hover:border-2 hover:border-black">
                    <div className="relative w-full h-16">
                        <Image
                            src="https://fleksa.com/wp-content/uploads/2021/11/Group-1283-e1636261731977.png"
                            layout="fill"
                            className="absolute object-contain"
                        />
                    </div>
                    <h1 className="text-xl font-bold font-oswald">
                        Email Marketing
                    </h1>
                </div>
                <div className="mx-auto bg-main text-2xl font-bold font-oswald px-8 py-4  hover:shadow-btn transition duration-300 ease-in-out hover:border-2 hover:border-black">
                    <div className="relative w-full h-16">
                        <Image
                            src="https://fleksa.com/wp-content/uploads/2021/11/Group-1285-e1636261756530.png"
                            layout="fill"
                            className="absolute object-contain"
                        />
                    </div>
                    <h1 className="text-xl font-bold font-oswald">
                        Print Marketing
                    </h1>
                </div>
                <div className="mx-auto bg-main text-2xl font-bold font-oswald px-8 py-4  hover:shadow-btn transition duration-300 ease-in-out hover:border-2 hover:border-black">
                    <div className="relative w-full h-16">
                        <Image
                            src="https://fleksa.com/wp-content/uploads/2021/11/Group-1286-e1636261783557.png"
                            layout="fill"
                            className="absolute object-contain"
                        />
                    </div>
                    <h1 className="text-xl font-bold font-oswald">
                        Loyalty Program
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Toolkit;
