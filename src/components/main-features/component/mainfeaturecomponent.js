import './mainfeaturecomponent.css'
import logoS from '../../../images/usefull/logoS.svg'
import { Typography } from '@mui/material'

const MainFeatureComponent = ({hasButton, text}) => {
    return (
        <div className="featurecomponent">
            {hasButton && <div style={{width: "100%", display: "flex", justifyContent: "flex-end"}}>
                <Typography sx={{color: "#C0392B"}}>NEW</Typography>
            </div>}
            <img src={logoS} alt="" />
            <Typography sx={{font: "Open Sans", fontWeight: "400", fontSize: "16px", lineHeight: "22px", textAlign: "center", margin: "20px"}}>
                {text}
            </Typography>
        </div>
    )
}

export default MainFeatureComponent