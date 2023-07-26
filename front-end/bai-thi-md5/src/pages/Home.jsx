import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TourService from "../services/tour.service.jsx";
import {useEffect, useState} from 'react'
import {Button} from "@mui/material";
import {Link} from 'react-router-dom';

export default function BasicTable() {
    const [listTours, setListTours] = useState([]);

    useEffect(() => {
        TourService.getAllTours()
            .then(res => {
                setListTours(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return (
        <>
            <Link to='/add'>
                <Button variant="contained" color="success">
                    Add
                </Button>
            </Link>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="right">Tên</TableCell>
                            <TableCell align="right">Giá</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listTours.map((tour) => (
                            <TableRow
                                key={tour.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {tour.id}
                                </TableCell>
                                <TableCell align="right">
                                    <Link to={`/detail/${tour.id}`}>
                                        {tour.title}
                                    </Link>
                                </TableCell>
                                <TableCell align="right">{tour.price}</TableCell>
                                <TableCell align="right">
                                    <Link to={`/edit/${tour.id}`}>
                                        <Button variant="contained" color="secondary">
                                            Edit
                                        </Button>
                                    </Link>
                                    <Link to={`/delete/${tour.id}`}>
                                        <Button variant="contained" color="error">
                                            Delete
                                        </Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}