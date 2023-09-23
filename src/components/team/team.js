import TeamComponent from './team-component/teamcomponent'
import './team.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const Team = () => {
    const settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

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

            <div className="carousel-team-container">
                <Slider {...settings1}>
                    <div>
                        <TeamComponent gender={"m"} name={"Ion Popescu"} position={'the fixer'} description={'He likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum et ullamcorper ipsum. '} />
                    </div>
                    <div>
                        <TeamComponent gender={"f"} name={"Andreea Ghica"} position={'the colorful'} description={'She likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. '} />
                    </div>
                    <div>
                        <TeamComponent gender={"m"} name={"Alexandru Ioanovici Cuza"} position={'the guy who owns the company'} description={'He likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. '} />
                    </div>
                    <div>
                        <TeamComponent gender={"m"} name={"Gruia"} position={'the entertainer'} description={'He likes to entertain. '} />
                    </div>
                    <div>
                        <TeamComponent gender={"f"} name={"Roxana"} position={'HR'} description={'She likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum et ullamcorper ipsum. '} />
                    </div>
                    <div>
                        <TeamComponent gender={"f"} name={"Mihaela Acatrinei"} position={'the coffee addict'} description={''} />
                    </div>
                    <div>
                        <TeamComponent gender={"m"} name={"Alexandru Ioanovici Cuza"} position={'the IT guy'} description={'He likes to kick the keyboard. '} />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Team