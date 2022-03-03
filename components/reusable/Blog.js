import Image from "next/image";
import React from "react";

function Blog({ title, date, imgUrl }) {
    return (
        <div className="border-2 relative border-black cursor-pointer">
            <span class="absolute mt-2 ml-2 px-2 py-1 mr-2 text-xs  leading-none text-secondary bg-main rounded-sm z-10">
                UNCATEGORIZED
            </span>
            <div className="relative w-full h-60 md:h-40 lg:h-56">
                <Image
                    src={imgUrl}
                    layout="fill"
                    className="absolute img-responsive"
                />
            </div>
            <div className="p-4">
                <p className="text-2xl font-oswald my-4">{title}</p>
                <div className="md:flex md:items-center md:justify-between">
                    <p className="hidden md:block">{date}</p>
                    <a href="#" className="font-oswald underline">
                        LEARN MORE
                    </a>
                </div>
                <p className="md:hidden">{date}</p>
            </div>
        </div>
    );
}

export default Blog;
