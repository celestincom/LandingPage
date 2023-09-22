import { Typography } from '@mui/material'
import MainFeatureComponent from './component/mainfeaturecomponent'
import './mainfeatures.css'

const MainFeatures = () => {
    return(
        <div className='outterboxfeatures'>
            <Typography sx={{font: "Open Sans", fontWeight: "400", fontSize: "30px", lineHeight: "40px", margin: "40px"}}>Our main features</Typography>
            <div className='boxfeatures'>
                <MainFeatureComponent hasButton={false} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus."}/>
                <MainFeatureComponent hasButton={false} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "} />
                <MainFeatureComponent hasButton={false} text={"Morbi consectetur aliquam urna."} />
                <MainFeatureComponent hasButton={false} text={"Morbi consectetur aliquam urna."} />
                <MainFeatureComponent hasButton={true} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna."} />
            </div>
        </div>
    )
}

export default MainFeatures