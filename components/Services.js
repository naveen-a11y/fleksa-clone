import Image from "next/image";
import React from "react";

function Services() {
    return (
        <div className="p-4 py-8 lg:container lg:mx-auto">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-5xl font-bold font-oswald">
                    Redefining Online Ordering
                </h1>
                <p className="text-xl font-openSans mt-6">
                    A digital platform for restaurants with a cutting edge user
                    interface that redefines the customer experience through
                    true personalization not only for today but also for the
                    future.
                </p>
            </div>
            <div className="md:flex md:justify-around">
                <div>
                    <div className="relative w-full h-60">
                        <Image
                            src="https://fleksa.com/wp-content/uploads/2021/09/Ilus-1-01-300x300.png"
                            layout="fill"
                            className="absolute object-contain"
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-center font-oswald">
                        Commission-Free Webshop
                    </h1>
                </div>
                <div>
                    <div className="relative w-full h-60">
                        <Image
                            src="https://fleksa.com/wp-content/uploads/2021/09/Illus-2-02-300x300.png"
                            layout="fill"
                            className="absolute object-contain"
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-center font-oswald">
                        Website & Order Management
                    </h1>
                </div>
                <div>
                    <div className="relative w-full h-60">
                        <Image
                            src="https://fleksa.com/wp-content/uploads/2021/09/Marketing-Illustration-01-300x300.png"
                            layout="fill"
                            className="absolute object-contain"
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-center font-oswald">
                        Restaurant Marketing
                    </h1>
                </div>
                <div>
                    <div className="relative w-full h-60">
                        <Image
                            src="https://fleksa.com/wp-content/uploads/2021/09/Ilus-4-04-300x300.png"
                            layout="fill"
                            className="absolute object-contain"
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-center font-oswald">
                        Ordering & Taking App
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Services;
