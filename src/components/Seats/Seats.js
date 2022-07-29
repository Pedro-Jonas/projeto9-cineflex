import Message from "../Message/Message";
import Footer from '../Footer/Footer';
import { useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function Seats(){
    const {idSessao}= useParams();
    const [seats, setSeats] = useState([]);
    const [movie, setMovie] = useState([]);
    const [day, setDay] = useState([]);

    useEffect(()=> {
    const promise = axios.get(
        `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`
    );
    promise.then((respost)=> {
    setSeats(respost.data) 
    setMovie(respost.data.movie)
    setDay(respost.data.day)
    });
    }, [idSessao]);
    return(
    <>
    <Message text="Selecione o(s) assento(s)"/>
    <Footer url={movie.posterURL} title={movie.title} day={day.weekday} time={seats.name}/>
    </>
    );
;}