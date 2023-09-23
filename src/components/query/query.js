import { Button, Typography } from '@mui/material'
import './query.css'
import * as yup from "yup";
import { useFormik } from "formik";
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useState } from 'react';

const Query = () => {
    const [src, setSrc] = useState("");

    const fetchSearchResult = (query) => {
        const searchUrl = `https://pixabay.com/api/?key=17507734-0fd0ba55378a94daaff718f98&q=${query}`;

        axios
            .get(searchUrl)
            .then(res => { setSrc(res.data.hits[0].largeImageURL); })
            .catch(error => console.log("error", error));
    };
    const validationSchema = yup.object({
        name: yup.string().required("Enter your name!"),
        fruit: yup.string().required("Enter a fruit!"),
        help: yup.string()
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            fruit: "",
            help: ""
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            console.log(formik.values.fruit);
            fetchSearchResult(formik.values.fruit);
        },
    });

    return (
        <div className="queryoutterbox">
            <div className='querybox'>
                {!src && <div className='queryinnerbox1'>
                    <Typography sx={{ fontFamily: "Open Sans", fontSize: "30px", lineHeight: "40px", color: "#27AE60", margin: '2rem 0rem' }}>
                        What about you?
                    </Typography>
                    <div className='name'>
                        <Typography sx={{ fontFamily: "Open Sans", fontSize: "20px", lineHeight: "27px", margin: '1rem 0rem' }}>
                            Full name
                        </Typography>
                        <TextField
                            id="name"
                            variant="outlined"
                            fullWidth
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.name && Boolean(formik.errors.name)
                            }
                            helperText={formik.touched.name && formik.errors.name}
                        />
                    </div>
                    <div className='fruit'>
                        <Typography sx={{ fontFamily: "Open Sans", fontSize: "20px", lineHeight: "27px", margin: '1rem 0rem' }}>
                            Preffered fruit
                        </Typography>
                        <TextField
                            id="fruit"
                            variant="outlined"
                            fullWidth
                            value={formik.values.fruit}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.fruit && Boolean(formik.errors.fruit)
                            }
                            helperText={formik.touched.fruit && formik.errors.fruit}
                        />
                    </div>
                    <div className='help'>
                        <Typography sx={{ fontFamily: "Open Sans", fontSize: "20px", lineHeight: "27px", margin: '1rem 0rem' }}>
                            How can we help you?
                        </Typography>
                        <TextField
                            id="help"
                            variant="outlined"
                            fullWidth
                            value={formik.values.help}
                            onChange={formik.handleChange}
                            multiline
                            rows={4}
                            error={
                                formik.touched.help && Boolean(formik.errors.help)
                            }
                            helperText={formik.touched.help && formik.errors.help}
                        />
                    </div>
                    <div className='submit'>
                        <Button sx={{ backgroundColor: "#2980b9", padding: "5px 20px" }} onClick={formik.handleSubmit}>
                            <Typography sx={{ color: 'white' }}>Submit</Typography>
                        </Button>
                    </div>
                </div>}
                {src && <div className='queryinnerbox2'>
                    <Typography sx={{fontFamily: "Open Sans", fontSize: "30px", lineHeight: "40px", color: "#27AE60", marginBottom: "2rem"}}>
                        Thank you, {formik.values.name}!
                    </Typography>
                    <img src={src} width="100%" alt="" />
                </div>}
            </div>
        </div>
    )
}

export default Query