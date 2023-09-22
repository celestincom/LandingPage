import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Picture1 from "../../images/carousel/Picture1.svg"
import "./carousel.css";

const Carousel = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        // slidesToScroll: 1,
        variableWidth: true
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img src={Picture1} alt="" />
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