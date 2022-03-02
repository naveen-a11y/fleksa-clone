import React from "react";

function SubscriptionPlan({ title, description, price }) {
    return (
        <div className="text-center px-4 py-12 shadow-plan my-8">
            <h3 className="text-2xl font-bold font-oswald">{title}</h3>
            <div className="my-8">
                <h1 className="text-4xl font-bold font-oswald">{price}</h1>
                <p className="text-lg mt-4">{description}</p>
            </div>
            <button className="bg-secondary p-8 rounded-lg font-oswald text-xl text-main transition-all ease-in transition-duration-300 hover:-translate-y-1">
                GET STARTED
            </button>
        </div>
    );
}

export default SubscriptionPlan;
