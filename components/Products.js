import React from "react";
import Product from "./reusable/Product";

const data = [
    {
        title: "Commission-Free Webshop",
        imgUrl: "https://fleksa.com/wp-content/uploads/2021/09/Product-Menu-Illustration-01.png",
        description:
            "You can expand your restaurant’s reach by taking orders online from nearby delivery locations via webshop.",
    },
    {
        title: "Website & Order Management",
        imgUrl: "https://fleksa.com/wp-content/uploads/2021/09/Product-Menu-Illustration-02.png",
        description:
            "Restaurant management on your fingertips with an easy to manage dashboard and no hidden fee involved.",
    },
    {
        title: "Restaurant Marketing",
        imgUrl: "https://fleksa.com/wp-content/uploads/2021/09/Marketing-Illustration-01.png",
        description:
            "Your restaurant can be the talk of town with your online presence over social media, drip campaigns, loyalty programs.",
    },
    {
        title: "Ordering & Taking App",
        imgUrl: "https://fleksa.com/wp-content/uploads/2021/09/Product-Menu-Illustration-04.png",
        description:
            "Our app connects with your customers in a more personal way. You get 100% of the profit, and manage orders on the go!",
    },
];

function Products({ setShow }) {
    return (
        <div
            className="bg-secondary p-8 grid grid-cols-4 gap-8"
            onMouseLeave={() => setShow(false)}
        >
            {data.map((item) => (
                <Product
                    imgUrl={item.imgUrl}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    );
}

export default Products;
