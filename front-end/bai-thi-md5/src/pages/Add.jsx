import {Box, Button, Grid, TextField} from "@mui/material";
import {Link} from "react-router-dom";
import {useFormik} from "formik";
import AuthService from "../services/tour.service.jsx";

export default function Add() {
    const formAdd = useFormik({
        initialValues: {
            title: '',
            price: '',
            description: '',
        },
        onSubmit: values => {
            let data = {
                title: values.title,
                price: values.price,
                description: values.description,
            }
            AuthService.addTour(data)
                .then(res => {
                    formAdd.resetForm();
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    })

    return (
        <>
            <h1>Thêm tour</h1>
            <Box component="form" onSubmit={formAdd.handleSubmit} noValidate sx={{mt: 3}}>
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
                            onChange={formAdd.handleChange}
                            value={formAdd.values.title}
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
                            onChange={formAdd.handleChange}
                            value={formAdd.values.price}
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
                            onChange={formAdd.handleChange}
                            value={formAdd.values.description}
                        />
                    </Grid>
                </Grid>

                <Button
                    type="submit"
                    variant="contained"
                    sx={{mt: 3, mb: 2, backgroundColor: 'green'}}
                >
                    Add
                </Button>
            </Box>
            <Link to='/'>
                <Button variant="contained">Cancel</Button>
            </Link>
        </>
    )
}