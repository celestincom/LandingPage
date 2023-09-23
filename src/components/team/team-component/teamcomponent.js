import './teamcomponent.css'
import teammale from '../../../images/usefull/team-male.svg'
import teamfemale from '../../../images/usefull/team-female.svg'
import { Typography } from '@mui/material'

const TeamComponent = ({gender, name, position, description}) => {
    return(
        <div className='outterteamcomponentbox'>
            <div className='round'>
                {gender === 'm' && <img src={teammale} style={{borderRadius: "200px"}} alt="" />}
                {gender === 'f' && <img src={teamfemale} style={{borderRadius: "200px"}} alt="" />}
            </div>
            <Typography sx={{color: "#2980B9", fontSize: "24px", lineHeight: "32px", fontFamily: "Open Sans", marginTop: "2rem"}}>
                {name}
            </Typography>
            <Typography sx={{ fontSize: "20px", lineHeight: "27px", fontFamily: "Open Sans", marginTop: "10px"}}>
                {position}
            </Typography>
            <Typography sx={{ fontSize: "16px", lineHeight: "22px", fontFamily: "Open Sans", marginTop: "10px", width: "250px"}}>
                {description}
            </Typography>
        </div>
    )
}

export default TeamComponent