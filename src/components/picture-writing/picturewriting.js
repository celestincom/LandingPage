import './picturewriting.css'
import img from '../../images/scooters/Scooters1.svg'
import { Typography } from '@mui/material'

const PictureWriting = () => {
    return (
        <div className="scootersbox">
            <div className='innerbox'>
                <img src={img} alt='' width="100%" />
                <div className='text'>
                    <Typography sx={{ font: "Open Sans", fontWeight: "400", fontSize: "30px", lineHeight: "40px", color: "#D35400" }}>
                        Nice scooters, right?
                    </Typography>
                    <Typography sx={{ font: "Open Sans", fontWeight: "400", fontSize: "16px", lineHeight: "22px", marginTop: '20px'}}>
                        Maecenas eget feugiat augue. Nulla faucibus vitae urna sit amet efficitur. Praesent justo mauris, facilisis eu magna et, varius lobortis ex.
                        Nunc ultrices ipsum at tincidunt suscipit. Maecenas id justo at quam faucibus euismod. Proin eu urna blandit, pharetra enim scelerisque, malesuada justo.
                        Sed commodo velit id augue lacinia, quis dignissim urna consectetur. Vestibulum et arcu vitae diam ultricies tempor. Praesent in posuere ante. Aenean dui mi,
                        imperdiet id placerat quis, fringilla et neque. Suspendisse porta justo odio, ut aliquet felis volutpat sit amet. Nunc fermentum vel dui ac sodales. Vivamus
                        consectetur tortor at mauris vulputate finibus.
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default PictureWriting