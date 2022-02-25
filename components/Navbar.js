import Image from "next/image";
import React, { useState } from "react";
import { MenuAlt1Icon, XCircleIcon } from "@heroicons/react/solid";
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
    return (
        <nav>
            <div className="flex  items-center justify-between p-4 bg-main shadow-lg border-b-2 border-gray-500 ">
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
                <div className="hidden md:flex md:space-x-8">
                    {navLinks.map((navlink) => (
                        <p
                            key={navlink.title}
                            className="font-bold cursor-pointer"
                        >
                            {navlink.title}
                        </p>
                    ))}
                    <div className="space-x-8">
                        <button className="font-bold">LOG IN</button>
                        <button className="font-bold">GET STARTED</button>
                    </div>
                </div>
                <div className="md:hidden">
                    <MenuAlt1Icon
                        onClick={() => setOpen(!open)}
                        className="w-6 h-6 cursor-pointer"
                    />
                </div>
            </div>
            {open ? (
                <aside className=" bg-main p-4 translate-x-0 fixed top-0 w-full h-screen ease-in transition-all duration-300">
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
                                    className="my-8 text-center cursor-pointer"
                                >
                                    {navLink.title}
                                </p>
                            ))}
                            <div className="space-x-8">
                                <button className="font-bold">LOG IN</button>
                                <button className="font-bold">
                                    GET STARTED
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>
            ) : (
                <aside className="bg-main p-4 translate-x-full fixed top-0 w-full h-screen ease-in transition-all duration-300">
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
                                    className="my-8 text-center cursor-pointer"
                                >
                                    {navLink.title}
                                </p>
                            ))}
                            <div className="space-x-8">
                                <button className="font-bold">LOG IN</button>
                                <button className="font-bold">
                                    GET STARTED
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>
            )}
        </nav>
    );
}

export default Navbar;
