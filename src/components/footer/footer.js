import './footer.css';
import logo from '../../images/burger-menu/splashlogo.svg'
import { Typography } from '@mui/material';
import Switch from '@mui/material/Switch';

const Footer = () => {
    return (
        <div className="footerbox">
            <div className='upperfooter'>
                <div className='firstdivfooter'>
                    <div className='text'>
                        <Typography sx={{ fontFamily: "Open Sans", fontSize: "24px", lineHeight: "32px", marginBottom: "20px" }}>
                            Some headline
                        </Typography>
                        <Typography sx={{ fontFamily: "Open Sans", fontSize: "16px", lineHeight: "22px" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Lorem ipsum dolor sit amet, adipiscing elit. Morbi consectetur aliquam urna.
                        </Typography>
                    </div>
                </div>
                <div className='seconddivfooter'>
                    <Typography sx={{ fontFamily: "Open Sans", fontSize: "24px", lineHeight: "32px", marginBottom: "20px", textAlign: 'center' }}>
                        Other links
                    </Typography>
                    <Typography sx={{ fontFamily: "Open Sans", fontSize: "16px", lineHeight: "22px", textAlign: 'center' }}>
                        Coffee
                    </Typography>
                    <Typography sx={{ fontFamily: "Open Sans", fontSize: "16px", lineHeight: "22px", textAlign: 'center' }}>
                        Tea
                    </Typography>
                    <Typography sx={{ fontFamily: "Open Sans", fontSize: "16px", lineHeight: "22px", textAlign: 'center' }}>
                        Water
                    </Typography>
                    <Typography sx={{ fontFamily: "Open Sans", fontSize: "16px", lineHeight: "22px", textAlign: 'center' }}>
                        Juice
                    </Typography>
                    <Typography sx={{ fontFamily: "Open Sans", fontSize: "16px", lineHeight: "22px", textAlign: 'center' }}>
                        Beer
                    </Typography>
                    <Typography sx={{ fontFamily: "Open Sans", fontSize: "16px", lineHeight: "22px", textAlign: 'center' }}>
                        Wine
                    </Typography>
                </div>
                <div className='thirddivfooter'>
                    <img src={logo} width="300px" alt="" />
                </div>
            </div>
            <div className='lowerfooter'>
                <div className='lowerfooterdiv1'>
                    <Switch />
                    <Typography sx={{ fontFamily: "Open Sans", fontSize: "16px", lineHeight: "22px", color: 'white', fontWeight: "400" }}>light switch</Typography>
                </div>
                <div className='lowerfooterdiv1'>

                </div>
                <div className='lowerfooterdiv2'>
                    <Typography sx={{ fontFamily: "Open Sans", fontSize: "16px", lineHeight: "22px", color: 'white', fontWeight: "400" }}>Copyright Codezilla 2022</Typography>
                </div>
            </div>
        </div>
    )
}

export default Footer