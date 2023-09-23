import { Typography } from '@mui/material'
import './collapseablecomponent.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CollapseableComponent = ({ indexkey, maintext, text, collapse, handleToggle }) => {
    return (
        <div className='collapsemainbox'>
            <div className='innermainbox'>
                <div className='collapsemain' onClick={()=>{handleToggle(indexkey)}}>
                    <Typography sx={{ fontFamily: "Open Sans", fontWeight: "400", fontSize: "24px", lineHeight: "32px" }}>
                        {maintext}
                    </Typography>
                    {collapse !== indexkey && <AddIcon fontSize='large' />}
                    {collapse === indexkey && <RemoveIcon fontSize='large' />}
                </div>
                {collapse === indexkey && <div className='collapsed'>
                    {text.map((value, index) =>
                        <div key={index}>
                            <Typography sx={{ fontFamily: "Open Sans", fontWeight: "400", fontSize: "16px", lineHeight: "22px", margin: "10px 0px" }}>
                                {value}
                            </Typography>
                        </div>
                    )}
                </div>}
            </div>
        </div>
    )
}

export default CollapseableComponent