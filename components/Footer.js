import {
    faFacebookF,
    faInstagram,
    faLinkedin,
    faLinkedinIn,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";
import React from "react";

function Footer() {
    return (
        <div className="bg-secondary px-4 py-16 text-white">
            <div className="text-center md:flex md:item-center md:justify-between lg:container lg:mx-auto">
                <div className="relative w-full h-10 md:w-32 md:h-auto">
                    <Image
                        src="https://fleksa.com/wp-content/uploads/2021/09/logo-white-300x72.png"
                        layout="fill"
                        className="absolute object-contain"
                    />
                </div>
                <h2 className="text-2xl mt-8">
                    <strong>Limitless</strong> Orders.<strong> No </strong>
                    <span className="md:block lg:inline-block">
                        Commissions.
                    </span>
                </h2>
                <h1 className="text-3xl mt-8 md:hidden">© 2021 fleksa.de</h1>
                <div className="my-8 flex justify-center  space-x-4 md:space-x-2">
                    <span className="bg-gray-800 p-4 rounded-lg text-xl cursor-pointer">
                        <FontAwesomeIcon
                            icon={faFacebookF}
                            className="w-6 h-6"
                        />
                    </span>
                    <span className="bg-gray-800 p-4 rounded-lg text-xl cursor-pointer">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="w-6 h-6"
                        />
                    </span>
                    <span className="bg-gray-800 p-4 rounded-lg text-xl cursor-pointer">
                        <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
                    </span>
                    <span className="bg-gray-800 p-4 rounded-lg text-xl cursor-pointer">
                        <FontAwesomeIcon
                            icon={faLinkedinIn}
                            className="w-6 h-6"
                        />
                    </span>
                    {/* Terms & Conditions Privacy Policy Imprint */}
                </div>
                <div className="space-x-4 text-lg font-oswald md:hidden">
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
            <div className="hidden mt-8 md:flex md:justify-between lg:container lg:mx-auto">
                <div>
                    <p>© 2021 fleksa.de</p>
                </div>
                <div className="space-x-4 font-oswald">
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
