import Head from "next/head";
import Image from "next/image";
import React from "react";
import SubscriptionPlan from "../components/reusable/SubscriptionPlan";

const monthlyPlan = [
    {
        title: "BASIC",
        price: "69€/mo",
        description:
            "Online Ordering System with menu and Order Management System",
    },
    {
        title: "WEBSHOP",
        price: "99€/mo",
        description:
            "Everything from Basic, plus Website with Restaurant Marketing Toolkit",
    },
    {
        title: "APPSHOP",
        price: "149€/mo",
        description: "Everything from Webshop, with custom iOS and Android App",
    },
];

function pricing() {
    return (
        <div>
            <Head>
                <title>Pricing | Fleksa</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link
                    rel="icon"
                    href="https://fleksa.com/wp-content/uploads/2021/09/cropped-Group-162-32x32.png"
                />
            </Head>
            <main className="bg-main">
                <div className="bg-main p-4  lg:container lg:mx-auto">
                    <h1 className="text-5xl font-bold font-oswald text-center">
                        Commission Free Onilne Ordering System
                    </h1>
                    <h2 className="text-4xl font-bold font-oswald text-center">
                        No Hidden Charges!
                    </h2>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {monthlyPlan.map((plan) => (
                            <div key={plan.title}>
                                <SubscriptionPlan
                                    title={plan.title}
                                    price={plan.price}
                                    description={plan.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-secondary">
                    <h1 className="text-6xl font-bold font-oswald text-main text-center mb-8">
                        Top Features
                    </h1>
                    <div className="relative w-96 h-72 mx-auto md:w-auto md:h-96 md:mr-16 lg:h-screen lg:mr-24">
                        <Image
                            src="https://fleksa.com/wp-content/uploads/2021/11/Group-1294-768x571.png"
                            layout="fill"
                            className="absolute object-contain"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default pricing;
