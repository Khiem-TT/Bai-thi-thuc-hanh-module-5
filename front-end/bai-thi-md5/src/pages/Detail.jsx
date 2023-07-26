import TourService from "../services/tour.service.jsx";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Button} from "@mui/material";

export default function Detail() {
    const [tour, setTour] = useState({});
    const idTour = useParams();

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
            <h1>Chi tiết tour</h1>
            <p>Tour du lịch {tour.title}</p>
            <p>Giá: ${tour.price}</p>
            <p>Giới thiệu: {tour.description}</p>
            <Link to='/'>
                <Button variant="contained">Danh sách</Button>
            </Link>
        </>
    )
}