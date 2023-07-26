import TourService from "../services/tour.service.jsx";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Button} from "@mui/material";

export default function Delete() {
    const [tour, setTour] = useState({});
    const idTour = useParams();
    const deleteTour = (id) => {
        TourService.deleteTour(id)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        TourService.getOneTour(idTour.idTour)
            .then(res => {
                setTour(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return (
        <>
            <h1>Xoá tour</h1>
            <p>Tour du lịch {tour.title}</p>
            <p>Giá: ${tour.price}</p>
            <p>Giới thiệu: {tour.description}</p>
            <Button
                variant="contained"
                color="error"
                onClick={() => deleteTour(idTour.idTour)}
            >
                Delete
            </Button>
            <Link to='/'>
                <Button variant="contained">Danh sách</Button>
            </Link>
        </>
    )
}