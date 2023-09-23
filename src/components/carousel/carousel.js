import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Picture1 from "../../images/carousel/Picture1.svg"
import "./carousel.css";
import { Typography } from "@mui/material";

const Carousel = () => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div>
                    <img src={Picture1} alt="" />
                    <div className="text-in-carousel">
                        <div>
                            <Typography sx={{ color: "#fff", fontFamily: "Open Sans", fontSize: "45px", lineHeight: "61px", fontWeight: "400" }}>
                                Welcome to our amazing website
                            </Typography>
                            <Typography sx={{ color: "#fff", fontFamily: "Open Sans", fontSize: "16px", lineHeight: "22px", fontWeight: "400" }}>
                                Lorem ipsum dolor sit amet
                            </Typography>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={Picture1} alt="" />
                </div>
                <div>
                    <img src={Picture1} alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default Carousel