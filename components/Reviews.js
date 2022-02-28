import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from "./Review";

const data = [
    {
        title: '"One of our earlier decisions as a new restaurant was to join Fleksa. A decision we are glad we made. Fleksa has offered us the solution to going online and make ourselves digitally present. The service team is available round the clock 24/7 and offer assistance for all our needs."',
        imgUrl: "https://fleksa.com/wp-content/uploads/2021/09/Logo-Icon-1-e1636560231543.png",
        reviewer: "Hanoi Quan",
    },
    {
        title: '"Many restaurant service providers have approached me over the numerous years of operating. Yet not one of them was able to offer me a simple and yet so effective service as Fleksa. With their provision-free online order concept, I am able to run my restaurant (in spite of the severe lockdown) and enjoy the profits without having to face heavy commissions."',
        imgUrl: "https://fleksa.com/wp-content/uploads/2021/09/Logo-Icon-2-e1636560320601.png",
        reviewer: "Taste Of India",
    },
    {
        title: '"Support Your Local Restaurant. Here is a company that actually practices what they promise. support for every restaurant, regardless of small or big."',
        imgUrl: "https://fleksa.com/wp-content/uploads/2021/09/Logo-Icon-3-e1636560367662.png",
        reviewer: "Tandoori Masala Imbiss",
    },
    {
        title: '"Fleksa, the best way to reach new customers, improve margins, and increase our online presence. There is no simpler way."',
        imgUrl: "https://fleksa.com/wp-content/uploads/2021/09/Logo-Icon-4-e1636560415762.png",
        reviewer: "Desi Adda",
    },
];

function Reviews() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="bg-secondary p-12">
            <Slider {...settings}>
                {data.map((item) => (
                    <div>
                        <Review
                            title={item.title}
                            imgUrl={item.imgUrl}
                            reviewer={item.reviewer}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Reviews;
