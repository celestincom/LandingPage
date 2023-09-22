import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../images/burger-menu/splashlogo.svg"
import burger from "../../images/burger-menu/burger.svg"
import cross from "../../images/burger-menu/cross.svg"

const Navbar = () => {

    const [hamburger, setHamburger] = useState("hamburger unclicked");
    const [display, setDisplay] = useState(1);

    useEffect(() => {
        if (window.innerWidth > 992) {
            setDisplay(1)
        }
        else {
            if (hamburger === "hamburger unclicked") {
                setDisplay(0)
            } else {
                setDisplay(1)
            }
        }
    }, [hamburger, window.innerWidth])

    const updateHamburger = () => {
        if (hamburger === "hamburger clicked") {
            setHamburger("hamburger unclicked")
        }
        else {
            setHamburger("hamburger clicked")
        }
    }

    return (
        <nav>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                    <div className="logo">
                        <img src={logo} alt='' />

                    </div>

                    <div className="navigation">
                        <div className={hamburger} onClick={updateHamburger}> <img src={hamburger === "hamburger unclicked" ? burger : cross} alt='' height="32px" width="32px" /> </div>

                        {/* <ul className="menu" > */}
                        <ul className="menu" style={!display ? { display: "none" } : { display: "flex" }}>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Jobs</a></li>
                            <li><a href="/">Cities</a></li>
                            <li><a href="/">Charging</a></li>
                            <li><a href="/">Ride Me</a></li>
                        </ul>
                    </div>
                </div>
                <div style={display ? { display: "flex", height: "50vh", width: "100vw" } : { display: "none" }}></div>
            </div>
        </nav>
    );
};

export default Navbar;
