import Image from "next/image";
import React, { useState } from "react";
import Products from "./Products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faCaretDown,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const navLinks = [
    { title: "HOME", link: "/" },
    { title: "PRICING", link: "/pricing" },
    { title: "PRODUCTS", link: "/" },
    { title: "BLOG", link: "/blog" },
];
const mobileNavLinks = navLinks.filter(
    (navLink) => navLink.title !== "PRODUCTS"
);

function Navbar() {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);

    return (
        <div className="sticky top-0 z-50 shadow-xl">
            <nav className="bg-main shadow-lg font-oswald">
                <div className="flex items-center justify-between p-4 lg:container lg:mx-auto">
                    <Link href="/">
                        <div className="relative w-32 h-10 cursor-pointer">
                            <Image
                                src="https://fleksa.com/wp-content/uploads/2021/09/logo.png"
                                layout="fill"
                                className="absolute object-contain"
                                priority
                            />
                        </div>
                    </Link>
                    <div className="hidden lg:flex md:items-center md:space-x-8">
                        {navLinks.map((navlink) => (
                            <div
                                key={navlink.title}
                                className="font-bold cursor-pointer"
                            >
                                {navlink.title === "PRODUCTS" ? (
                                    <p
                                        onMouseEnter={() => setShow(true)}
                                        className="flex items-center"
                                    >
                                        {navlink.title}{" "}
                                        <FontAwesomeIcon
                                            icon={faCaretDown}
                                            className="w-5 h-5"
                                        />
                                    </p>
                                ) : (
                                    <Link href={navlink.link}>
                                        {navlink.title}
                                    </Link>
                                )}
                            </div>
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
                        <FontAwesomeIcon
                            icon={faBars}
                            onClick={() => setOpen(!open)}
                            className="w-6 h-6 cursor-pointer"
                        />
                    </div>
                </div>
                {open ? (
                    <aside className=" bg-main p-4 translate-x-0 fixed top-0 w-full h-screen ease-in transition-all duration-300 z-10 lg:hidden">
                        <FontAwesomeIcon
                            icon={faXmark}
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
                        <FontAwesomeIcon
                            icon={faXmark}
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
        </div>
    );
}

export default Navbar;
