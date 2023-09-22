import { Button, Typography } from '@mui/material';
import './download.css'

const Download = () => {
    return (
        <div className="margins">
        <div className="box">
            <Typography style={{ font: "Open Sans", fontSize: "30px", fontWeight: "400", lineHeight: "40px" }}>
                Bored to stay in traffic?
            </Typography>

            <Typography style={{ font: "Open Sans", fontSize: "16px", fontWeight: "400", lineHeight: "22px", margin: "20px 0px" }}>
                Download the app
            </Typography>
    
            <div className="buttons">
                <Button sx={{ backgroundColor: "#2980b9", padding: "5px 15px" }}>
                    <Typography sx={{ color: 'white' }}>Download 1</Typography>
                </Button>
                <Button sx={{ backgroundColor: "#2980b9", padding: "5px 15px" }}>
                    <Typography sx={{ color: 'white' }}>Download 2</Typography>
                </Button>
            </div>
        </div>
        </div>
    )
}

export default Download