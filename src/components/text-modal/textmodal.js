import { Typography, Button, Modal, Box } from "@mui/material"
import React from "react";
import './textmodal.css'

const TextModal = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div style={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "40px 0px" }}>
            <div className='graybox'>
                <Typography sx={{ font: "Open Sans", fontWeight: "400", fontSize: "30px", lineHeight: "40px", color: "#27AE60" }}>
                    Some boring text, good for SEO
                </Typography>

                <Typography sx={{ font: "Open Sans", fontWeight: "400", fontSize: "16px", lineHeight: "22px", margin: "20px", textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor
                    lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero
                    rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec.
                </Typography>

                <Typography sx={{ font: "Open Sans", fontWeight: "400", fontSize: "16px", lineHeight: "22px", margin: "20px", textAlign: "center", fontStyle: "italic" }}>
                    Maecenas eget feugiat augue. Nulla faucibus vitae urna sit amet efficitur. Praesent justo mauris, facilisis eu magna et, varius lobortis ex. Nunc ultrices ipsum at
                    tincidunt suscipit. Maecenas id justo at quam faucibus euismod. Proin eu urna blandit, pharetra enim scelerisque, malesuada justo. Sed commodo velit id augue lacinia, quis
                    dignissim urna consectetur. Vestibulum et arcu vitae diam ultricies tempor. Praesent in posuere ante. Aenean dui mi, imperdiet id placerat quis, fringilla et n eque.
                    Suspendisse porta justo odio, ut aliquet felis volutpat sit amet. Nunc fermentum vel dui ac sodales. Vivamus consectetur tortor at mauris vulputate finibus.
                </Typography>

                <Button onClick={handleOpen} sx={{ backgroundColor: "#1abc9c", padding: "5px 15px" }}>
                    <Typography sx={{ color: 'white' }}>Do Something</Typography>
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="thebox" sx={style} >
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus.
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit.
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
    )
}

export default TextModal

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
