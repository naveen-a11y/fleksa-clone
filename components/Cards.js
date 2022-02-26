import Image from "next/image";
import React from "react";

function Cards() {
    return (
        <div className="bg-secondary text-main pt-24">
            <div className="p-4 lg:container lg:mx-auto">
                <h1 className="font-bold font-oswald text-5xl text-center">
                    How It Works
                </h1>
                <div className="md:flex md:justify-between lg:justify-around">
                    <div className="flex items-center md:flex-col">
                        <div className="w-1/2 md:w-full">
                            <div className="relative w-full h-48 lg:h-72">
                                <Image
                                    src="https://fleksa.com/wp-content/uploads/2021/10/Illustration-Number-01-150x150.png"
                                    layout="fill"
                                    className="absolute object-contain"
                                />
                            </div>
                        </div>
                        <div className="w-1/2 md:w-full text-center">
                            <h1 className="text-3xl font-bold font-oswald">
                                Get In touch
                            </h1>
                            <p className="text-xl">
                                And we will contact you as
                                <br />
                                soon as possible
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center md:hidden">
                        <div className="w-1/2 text-center">
                            <h1 className="text-3xl font-bold font-oswald">
                                Send us your menu
                            </h1>
                            <p className="text-xl">
                                And a few other details
                                <br />
                                about your restaurant
                            </p>
                        </div>
                        <div className="w-1/2">
                            <div className="relative w-full h-48 lg:h-72">
                                <Image
                                    src="https://fleksa.com/wp-content/uploads/2021/10/Illustration-Number-02-150x150.png"
                                    layout="fill"
                                    className="absolute object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex md:items-center md:flex-col">
                        <div className="w-1/2 md:w-full">
                            <div className="relative w-full h-48 lg:h-72">
                                <Image
                                    src="https://fleksa.com/wp-content/uploads/2021/10/Illustration-Number-02-150x150.png"
                                    layout="fill"
                                    className="absolute object-contain"
                                />
                            </div>
                        </div>
                        <div className="w-1/2 md:w-full text-center">
                            <h1 className="text-3xl font-bold font-oswald">
                                Send us your menu
                            </h1>
                            <p className="text-xl">
                                And a few other details
                                <br />
                                about your restaurant
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center md:flex-col">
                        <div className="w-1/2 md:w-full">
                            <div className="relative w-full h-48 lg:h-72">
                                <Image
                                    src="https://fleksa.com/wp-content/uploads/2021/10/Illustration-Number-03-150x150.png"
                                    layout="fill"
                                    className="absolute object-contain"
                                />
                            </div>
                        </div>
                        <div className="w-1/2 md:w-full text-center">
                            <h1 className="text-3xl font-bold font-oswald">
                                Start Accepting Orders
                            </h1>
                            <p className="text-xl">
                                and stay Commission free
                                <br />
                                forever
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-48 mb-12">
                    <iframe
                        width="750"
                        height="400"
                        src="https://www.youtube.com/embed/6Lli1b_HSus"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Cards;
