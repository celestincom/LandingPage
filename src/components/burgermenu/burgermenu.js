import { useState } from 'react';
import logo from '../../images/burger-menu/splashlogo.svg'
import './burgermenu.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const BurgerMenu = () => {
    const [lower, setLower] = useState(false);

    const handleToggle = () => {
        if (lower) {
            setLower(false);
        }
        else {
            setLower(true);
        }
    }

    return (
        <div className="burgerbox">
            <div className="upperpart">
                <div className="logoburger">
                    <img src={logo} height="40px" alt="" />
                </div>
                <div className='nav'>
                    <ul className="menu">
                        <li><a href="/">About</a></li>
                        <li><a href="/">Jobs</a></li>
                        <li><a href="/">Cities</a></li>
                        <li><a href="/">Charging</a></li>
                        <li><a href="/" style={{ padding: "7px 1rem", margin: "0rem 2rem", backgroundColor: "#1ABC9C", color: 'white', borderRadius: "5px" }} >Ride Me</a></li>
                    </ul>
                    <div className='burger'>
                        {!lower && <MenuIcon fontSize='large' sx={{ cursor: "pointer", color: "#1ABC9C" }} onClick={handleToggle} />}
                        {lower && <CloseIcon fontSize='large' sx={{ cursor: "pointer", color: "#1ABC9C" }} onClick={handleToggle} />}
                    </div>
                </div>
            </div>
            {lower && <div className="lowerpart">
                <ul className="secondmenu">
                    <li><a href="/">About</a></li>
                    <li><a href="/">Jobs</a></li>
                    <li><a href="/">Cities</a></li>
                    <li><a href="/">Charging</a></li>
                    <li><a href="/" style={{ padding: "7px 1rem", margin: "1rem 2rem", backgroundColor: "#1ABC9C", color: 'white', borderRadius: "5px" }}>Ride Me</a></li>
                </ul>
            </div>}
        </div>
    )
}

export default BurgerMenu