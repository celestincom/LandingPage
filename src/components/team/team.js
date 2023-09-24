import TeamComponent from './team-component/teamcomponent'
import './team.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import React from "react";
// import Slider from "react-slick";
// import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const Team = () => {
    const settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    // const swiper = new Swiper('.swiper', {
    //     // Optional parameters
    //     direction: 'horizontal',
    //     loop: true,
    //     loopedSlides: 7,
    //     slidesPerView: 2,
    //     centeredSlides: true,

    //     // If we need pagination
    //     pagination: {
    //         el: '.swiper-pagination',
    //     },

    //     // Navigation arrows
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },

    //     // And if we need scrollbar
    //     scrollbar: {
    //         el: '.swiper-scrollbar',
    //     },
    // });

    return (
        <div className='teamoutterbox'>
            <div className='teambox'>
                <TeamComponent gender={"m"} name={"Ion Popescu"} position={'the fixer'} description={'He likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum et ullamcorper ipsum. '} />
                <TeamComponent gender={"f"} name={"Andreea Ghica"} position={'the colorful'} description={'She likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. '} />
                <TeamComponent gender={"m"} name={"Alexandru Ioanovici Cuza"} position={'the guy who owns the company'} description={'He likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. '} />
                <TeamComponent gender={"m"} name={"Gruia"} position={'the entertainer'} description={'He likes to entertain. '} />
                <TeamComponent gender={"f"} name={"Roxana"} position={'HR'} description={'She likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum et ullamcorper ipsum. '} />
                <TeamComponent gender={"f"} name={"Mihaela Acatrinei"} position={'the coffee addict'} description={''} />
                <TeamComponent gender={"m"} name={"Alexandru Ioanovici Cuza"} position={'the IT guy'} description={'He likes to kick the keyboard. '} />
            </div>

            {/* bugs on react slick */}

            {/* <div className="carousel-team-container">
                <Slider {...settings1}>
                        <TeamComponent gender={"m"} name={"Ion Popescu"} position={'the fixer'} description={'He likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum et ullamcorper ipsum. '} />
                        <TeamComponent gender={"f"} name={"Andreea Ghica"} position={'the colorful'} description={'She likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. '} />
                        <TeamComponent gender={"m"} name={"Alexandru Ioanovici Cuza"} position={'the guy who owns the company'} description={'He likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. '} />
                        <TeamComponent gender={"m"} name={"Gruia"} position={'the entertainer'} description={'He likes to entertain. '} />
                        <TeamComponent gender={"f"} name={"Roxana"} position={'HR'} description={'She likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum et ullamcorper ipsum. '} />
                        <TeamComponent gender={"f"} name={"Mihaela Acatrinei"} position={'the coffee addict'} description={''} />
                        <TeamComponent gender={"m"} name={"Alexandru Ioanovici Cuza"} position={'the IT guy'} description={'He likes to kick the keyboard. '} />
                </Slider>
            </div> */}

            {/* swiper doesn't show arrows so you can't slide */}

            {/* <div className='carousel-team-container'>
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><TeamComponent gender={"m"} name={"Ion Popescu"} position={'the fixer'} description={'He likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum et ullamcorper ipsum. '} /></div>
                        <div class="swiper-slide"><TeamComponent gender={"f"} name={"Andreea Ghica"} position={'the colorful'} description={'She likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. '} /></div>
                        <div class="swiper-slide"><TeamComponent gender={"m"} name={"Alexandru Ioanovici Cuza"} position={'the guy who owns the company'} description={'He likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. '} /></div>
                        <div class="swiper-slide"><TeamComponent gender={"m"} name={"Gruia"} position={'the entertainer'} description={'He likes to entertain. '} /></div>
                        <div class="swiper-slide"><TeamComponent gender={"f"} name={"Roxana"} position={'HR'} description={'She likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum et ullamcorper ipsum. '} /></div>
                        <div class="swiper-slide"><TeamComponent gender={"f"} name={"Mihaela Acatrinei"} position={'the coffee addict'} description={''} /></div>
                        <div class="swiper-slide"><TeamComponent gender={"m"} name={"Alexandru Ioanovici Cuza"} position={'the IT guy'} description={'He likes to kick the keyboard. '} /></div>
                        ...
                    </div>
                    <div class="swiper-pagination"></div>

                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>

                    <div class="swiper-scrollbar"></div>
                </div>
            </div> */}

            <div className='carousel-team-container'>
                <Swiper
                    loop={true}
                    navigation={true}
                    slidesPerView={2}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><TeamComponent gender={"m"} name={"Ion Popescu"} position={'the fixer'} description={'He likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum et ullamcorper ipsum. '} /></SwiperSlide>
                    <SwiperSlide><TeamComponent gender={"f"} name={"Andreea Ghica"} position={'the colorful'} description={'She likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. '} /></SwiperSlide>
                    <SwiperSlide><TeamComponent gender={"m"} name={"Alexandru Ioanovici Cuza"} position={'the guy who owns the company'} description={'He likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. '} /></SwiperSlide>
                    <SwiperSlide><TeamComponent gender={"m"} name={"Gruia"} position={'the entertainer'} description={'He likes to entertain. '} /></SwiperSlide>
                    <SwiperSlide><TeamComponent gender={"f"} name={"Roxana"} position={'HR'} description={'She likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum et ullamcorper ipsum. '} /></SwiperSlide>
                    <SwiperSlide><TeamComponent gender={"f"} name={"Mihaela Acatrinei"} position={'the coffee addict'} description={''} /></SwiperSlide>
                    <SwiperSlide><TeamComponent gender={"m"} name={"Alexandru Ioanovici Cuza"} position={'the IT guy'} description={'He likes to kick the keyboard. '} /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Team