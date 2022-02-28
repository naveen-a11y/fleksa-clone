import Image from "next/image";
import React from "react";

function Form() {
    return (
        <div className="lg:container lg:mx-auto lg:px-12 lg:py-24 lg:max-w-6xl">
            <div className="px-4 py-8 lg:flex lg:items-center lg:p-0 lg:border-2 lg:border-secondary">
                <div className="bg-secondary p-4 text-main text-center lg:w-1/2">
                    {/* right section */}
                    <div className="relative w-full h-72">
                        <Image
                            src="https://fleksa.com/wp-content/uploads/2021/10/Group-1224.png"
                            layout="fill"
                            className="absolute object-contain"
                        />
                    </div>
                    <h1 className="text-5xl font-oswald font-bold mt-4">
                        Digitize Your
                        <span className="lg:block lg:mt-4">Restaurant</span>
                    </h1>
                    <p className="text-2xl my-4">
                        And turn people visiting your website into regular food
                        clients…
                    </p>
                    <p className="text-2xl lg:hidden">
                        Talk to us today and we’ll run grow your restaurant
                        business like never before
                    </p>
                </div>
                <div className="bg-secondary p-4 lg:w-1/2 lg:bg-main">
                    {/* left section */}
                    <div className="hidden lg:block text-main">
                        <div className="flex items-center">
                            <div className="relative w-24 h-12">
                                <Image
                                    src="https://fleksa.com/wp-content/uploads/2021/10/Group-1027.png"
                                    layout="fill"
                                    className="absolute object-contain"
                                />
                            </div>
                            <h1 className="text-4xl font-bold font-oswald text-secondary">
                                Let’s Get Started
                            </h1>
                        </div>
                        <p>
                            Talk to us today and we’ll run grow your restaurant
                            bussiness like never before
                        </p>
                    </div>
                    <form className="flex flex-col space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="p-3 text-xl outline-none placeholder-yellow-200 bg-secondary border-2 border-main text-main lg:bg-transparent lg:border-secondary lg:text-secondary lg:placeholder-yellow-600"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            className="p-3 text-xl outline-none placeholder-yellow-200 bg-secondary border-2 border-main text-main lg:bg-transparent lg:border-secondary lg:text-secondary lg:placeholder-yellow-600"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-3 text-xl outline-none placeholder-yellow-200 bg-secondary border-2 border-main text-main lg:bg-transparent lg:border-secondary lg:text-secondary lg:placeholder-yellow-600"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Restraunt Name"
                            className="p-3 text-xl outline-none placeholder-yellow-200 bg-secondary border-2 border-main text-main lg:bg-transparent lg:border-secondary lg:text-secondary lg:placeholder-yellow-600"
                            required
                        />
                        <button
                            type="submit"
                            className="font-oswald bg-main p-3 text-xl lg:bg-secondary lg:text-main lg:hover:text-secondary lg:hover:bg-main"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
