import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./style.css"
import Message from "../Message/Message";
import Footer from '../Footer/Footer';

export default function Time(){
    const {idFilme} = useParams();
    const [days, setDays] = useState([]);
    const [data, setData] = useState([]);

    useEffect(()=> {
    const promise = axios.get(
        `https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`
    );
    promise.then((respost)=> {
    setDays(respost.data.days) 
    setData(respost.data)});
    },[idFilme]);
    return(
    <>
    <Message text="Selecione o horário"/>
    <div className='times'>
        {days.map((item)=> 
        <div key={item.id} className="time" >
            {item.weekday} - {item.date}
        <div className='sessoes'>
            {item.showtimes.map((horas)=> {return (
            <Link key={horas.id} to={`/assentos/${horas.id}`}>
            <div className="button" >
                {horas.name}
            </div>
            </Link>) } )}
        </div>
        </div>)}
    </div>
    <Footer url={data.posterURL} title={data.title}/>
    </>
    );
};