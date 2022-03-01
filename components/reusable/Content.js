import Image from "next/image";
import React from "react";

function Content({ imgUrl, title, para1, para2, para3, list }) {
    return (
        <div className="bg-secondary p-4 text-main">
            <div className="lg:container mx-auto  md:flex md:items-center">
                <div className="md:w-1/2">
                    <div className="relative w-full h-96 md:h-screen">
                        <Image
                            src={imgUrl}
                            layout="fill"
                            className="absolute object-contain"
                        />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-5xl font-bold font-oswald">{title}</h1>
                    {para1 && <p className="text-xl mt-4">{para1}</p>}
                    {para2 && <p className="text-xl my-4">{para2}</p>}
                    {para3 && <p className="text-xl">{para3}</p>}
                    <div className="my-4">
                        {list.map((item) => (
                            <p className="text-xl">
                                <i className="fa-solid fa-circle-dot"></i>{" "}
                                {item}
                            </p>
                        ))}
                    </div>
                    <button className="bg-main text-black text-2xl font-bold font-oswald p-1  shadow-btn transition duration-300 ease-in-out border-2 border-black hover:shadow-none hover:text-main hover:bg-black hover:border-main">
                        LEARN MORE
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Content;
