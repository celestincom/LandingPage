import upquote from '../../images/usefull/upquote.svg'
import downquote from '../../images/usefull/downquote.svg'
import './quote.css'
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const Quote = () => {
    let quote = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec.', 'Some text', 'Random stuff'];
    let author = ['Ion Luca Caragiale', 'Me', 'Some Random Dude'];
    const [number, setNumber] = useState(0);

    useEffect(() => {
        setInterval(() => {
            if(number===2) {
                setNumber(0);
            }
            else {
                setNumber(number+1);
            }
            
        }, 10000)
    },[])

    return (
        <div className="quotebox">
            <Typography sx={{fontFamily: "Open Sans", fontSize: "30px", lineHeight: "40px", textAlign: "center"}}>
                Don't trust us,
            </Typography>
            <Typography sx={{fontFamily: "Open Sans", fontSize: "30px", lineHeight: "40px", textAlign: "center", marginBottom: "3rem"}}>
                trust them
            </Typography>
            <div className="quote">
                <div>
                    <img src={upquote} width="81px" alt="" />
                </div>
                <div className='innerquote'>
                    <div className='textquote'>
                        <Typography sx={{ fontFamily: "Open Sans", fontSize: "16px", lineHeight: "22px" }}>
                            {quote[number]}
                        </Typography>
                        <Typography sx={{ fontFamily: "Open Sans", fontSize: "16px", lineHeight: "22px", color: '#2980B9', marginTop: "15px" }}>
                            {author[number]}
                        </Typography>
                    </div>
                </div>
                <div className='downquote'>
                    <img src={downquote} width="81px" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Quote