import Message from "../Message/Message";
import Footer from '../Footer/Footer';
import { useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import "./style.css"

export default function Seats(){
    const {idSessao}= useParams();
    const [data, setData] = useState([]);
    const [seats, setSeats] = useState([]);
    const [movie, setMovie] = useState([]);
    const [day, setDay] = useState([]);

    useEffect(()=> {
    const promise = axios.get(
        `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`
    );
    promise.then((respost)=> {
    setData(respost.data)
    setSeats(respost.data.seats) 
    setMovie(respost.data.movie)
    setDay(respost.data.day)
    });
    }, [idSessao]);

    return(
    <>
    <Message text="Selecione o(s) assento(s)"/>
    <div className="seats">
        {seats.map((seat)=> {
        const avaliable = seat.isAvailable
        return(
        avaliable?
        (<div key={seat.id} className="seat disponivel">
            {seat.name}
        </div>) : 
        (<div key={seat.id} className="seat indisponivel">
            {seat.name}
        </div>)
       )})}
    </div>
    <div className="informacao">
        <div className="seat selecionado"></div>
        <div className="seat disponivel"></div>
        <div className="seat indisponivel"></div>
    </div>
    <div className="descricao">
       <p>selecionado</p> 
       <p>disponível</p> 
       <p>indisponível</p> 
    </div>
    <Footer url={movie.posterURL} title={movie.title} day={day.weekday} time={data.name}/>
    </>
    );
;}