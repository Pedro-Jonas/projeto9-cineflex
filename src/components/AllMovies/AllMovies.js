import "./style.css";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Message from "../Message/Message";


export default function AllMovies(){
    const [filmes, setFilmes] = useState([]);
    useEffect(()=> {
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
        promise.then(respost => {setFilmes(respost.data)})

    }, []);
    return(
    <>
    <Message text="Selecione o filme"/>
    <div className="posters">
		{filmes.map(item => <Link key={item.id} to={`/sessoes/${item.id}`}><div className="poster"><img src={item.posterURL} alt="poster"/></div></Link>)}
	</div>
    </>
    );
};