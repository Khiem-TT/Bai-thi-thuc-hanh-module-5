import {Box, Button, Grid, TextField} from "@mui/material";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useFormik} from "formik";
import AuthService from "../services/tour.service.jsx";
import TourService from "../services/tour.service.jsx";
import {useEffect, useState} from "react";

export default function Edit() {
    const [tour, setTour] = useState({});
    const idTour = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        TourService.getOneTour(idTour.idTour)
            .then(res => {
                setTour(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    const formEdit = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: tour.title,
            price: tour.price,
            description: tour.description,
        },
        onSubmit: values => {
            let data = {
                title: values.title,
                price: values.price,
                description: values.description,
            }
            AuthService.editTour(idTour.idTour, data)
                .then(res => {
                    console.log(res);
                    navigate('/');
                })
                .catch(err => {
                    console.log(err);
                })
        }
    })

    return (
        <>
            <h1>Sửa tour</h1>
            <Box component="form" onSubmit={formEdit.handleSubmit} noValidate sx={{mt: 3}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="title"
                            label="Tên tour"
                            name="title"
                            autoComplete="title"
                            InputLabelProps={{style: {color: 'black'}}}
                            InputProps={{
                                style: {color: 'black', border: '1px solid black'},
                                inputProps: {style: {color: 'black'}},
                            }}
                            onChange={formEdit.handleChange}
                            value={formEdit.values.title}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="price"
                            label="Giá"
                            name="price"
                            autoComplete="price"
                            InputLabelProps={{style: {color: 'black'}}}
                            InputProps={{
                                style: {color: 'black', border: '1px solid black'},
                                inputProps: {style: {color: 'black'}},
                            }}
                            onChange={formEdit.handleChange}
                            value={formEdit.values.price}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="description"
                            label="Mô tả"
                            name="description"
                            autoComplete="description"
                            InputLabelProps={{style: {color: 'black'}}}
                            InputProps={{
                                style: {color: 'black', border: '1px solid black'},
                                inputProps: {style: {color: 'black'}},
                            }}
                            onChange={formEdit.handleChange}
                            value={formEdit.values.description}
                        />
                    </Grid>
                </Grid>

                <Button
                    type="submit"
                    variant="contained"
                    sx={{mt: 3, mb: 2, backgroundColor: 'green'}}
                >
                    Save
                </Button>
            </Box>
            <Link to='/'>
                <Button variant="contained">Cancle</Button>
            </Link>
        </>
    )
}