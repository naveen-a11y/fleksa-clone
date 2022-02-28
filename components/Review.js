import React from "react";
import Image from "next/image";

function Review({ title, imgUrl, reviewer }) {
    return (
        <div>
            <div className="max-w-5xl mx-auto border-2 border-main p-4 text-main h-[34rem] sm:h-[28rem] md:h-96 lg:h-80">
                <p className="text-2xl">
                    <i>{title}</i>
                </p>
                <div className="flex items-center justify-end mt-4">
                    <div className="relative w-36 h-24">
                        <Image
                            src={imgUrl}
                            layout="fill"
                            className="absolute object-contain"
                        />
                    </div>
                    <p className="text-lg font-bold">{reviewer}</p>
                </div>
            </div>
        </div>
    );
}

export default Review;
