import Image from "next/image";
import React, { useState } from "react";
import { MenuAlt1Icon, XCircleIcon } from "@heroicons/react/solid";
import Products from "./Products";
const navLinks = [
    { title: "HOME", link: "/" },
    { title: "PRICING", link: "/" },
    { title: "PRODUCTS", link: "/" },
    { title: "BLOG", link: "/" },
];
const mobileNavLinks = navLinks.filter(
    (navLink) => navLink.title !== "PRODUCTS"
);

function Navbar() {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);

    return (
        <>
            <nav className="bg-main shadow-lg border-b-2 border-black font-oswald">
                <div className="flex  items-center justify-between p-4 lg:container lg:mx-auto">
                    <div>
                        <div className="relative w-32 h-10">
                            <Image
                                src="https://fleksa.com/wp-content/uploads/2021/09/logo.png"
                                layout="fill"
                                className="absolute object-contain"
                                priority
                            />
                        </div>
                    </div>
                    <div className="hidden lg:flex md:items-center md:space-x-8">
                        {navLinks.map((navlink) => (
                            <p
                                key={navlink.title}
                                className="font-bold cursor-pointer"
                            >
                                {navlink.title === "PRODUCTS" ? (
                                    <p onMouseEnter={() => setShow(true)}>
                                        {navlink.title}{" "}
                                        <i class="fa-solid fa-caret-down"></i>
                                    </p>
                                ) : (
                                    <p>{navlink.title}</p>
                                )}
                            </p>
                        ))}
                        <div className="space-x-8">
                            <button className="bg-main font-bold px-4 py-3 ml-5 shadow-btn transition duration-300 ease-in-out border-2 border-black hover:shadow-none hover:text-main hover:bg-black">
                                LOG IN
                            </button>
                            <button className="bg-main font-bold px-4 py-3 ml-5 shadow-btn transition duration-300 ease-in-out border-2 border-black hover:shadow-none hover:text-main hover:bg-black">
                                GET STARTED
                            </button>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <MenuAlt1Icon
                            onClick={() => setOpen(!open)}
                            className="w-6 h-6 cursor-pointer"
                        />
                    </div>
                </div>
                {open ? (
                    <aside className=" bg-main p-4 translate-x-0 fixed top-0 w-full h-screen ease-in transition-all duration-300 z-10 lg:hidden">
                        <XCircleIcon
                            onClick={() => setOpen(false)}
                            className="w-6 h-6 cursor-pointer ml-auto"
                        />
                        <div className="flex flex-col items-center">
                            <div className="relative w-32 h-10">
                                <Image
                                    src="https://fleksa.com/wp-content/uploads/2021/09/logo.png"
                                    layout="fill"
                                    className="absolute object-contain"
                                    priority
                                />
                            </div>

                            <div>
                                {mobileNavLinks.map((navLink) => (
                                    <p
                                        key={navLink.title}
                                        className="my-8 text-center cursor-pointer font-bold"
                                    >
                                        {navLink.title}
                                    </p>
                                ))}
                                <div className="space-x-8">
                                    <button className="bg-main font-bold px-4 py-3 ml-5 shadow-btn transition duration-300 ease-in-out border-2 border-black hover:shadow-none hover:text-main hover:bg-black">
                                        LOG IN
                                    </button>
                                    <button className="bg-main font-bold px-4 py-3 ml-5 shadow-btn transition duration-300 ease-in-out border-2 border-black hover:shadow-none hover:text-main hover:bg-black">
                                        GET STARTED
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>
                ) : (
                    <aside className="bg-main p-4 translate-x-full fixed top-0 w-full h-screen ease-in transition-all duration-300 z-10 lg:hidden">
                        <XCircleIcon
                            onClick={() => setOpen(false)}
                            className="w-6 h-6 cursor-pointer ml-auto"
                        />
                        <div className="flex flex-col items-center">
                            <div className="relative w-32 h-10">
                                <Image
                                    src="https://fleksa.com/wp-content/uploads/2021/09/logo.png"
                                    layout="fill"
                                    className="absolute object-contain"
                                    priority
                                />
                            </div>

                            <div>
                                {mobileNavLinks.map((navLink) => (
                                    <p
                                        key={navLink.title}
                                        className="my-8 text-center cursor-pointer font-bold"
                                    >
                                        {navLink.title}
                                    </p>
                                ))}
                                <div className="space-x-8">
                                    <button className="bg-main font-bold px-4 py-3 ml-5 shadow-btn transition duration-300 ease-in-out border-2 border-black hover:shadow-none hover:text-main hover:bg-black">
                                        LOG IN
                                    </button>
                                    <button className="bg-main font-bold px-4 py-3 ml-5 shadow-btn transition duration-300 ease-in-out border-2 border-black hover:shadow-none hover:text-main hover:bg-black">
                                        GET STARTED
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>
                )}
            </nav>
            {show && <Products setShow={setShow} />}
        </>
    );
}

export default Navbar;
