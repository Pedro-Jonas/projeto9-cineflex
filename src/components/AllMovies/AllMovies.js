import "./style.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Message from "../Message/Message";

export default function AllMovies(){
    const [filmes, setFilmes] = useState([]);
    useEffect(()=> {
        const get = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        get.then(respost => {setFilmes(respost.data)})

    }, []);
    return(
    <>
    <Message text="Selecione o filme"/>
    <div className="posters">
		{filmes.map(item => <div key={item.id} className="poster"><img src={item.posterURL} alt="poster"/></div>)}
	</div>
    </>
    );
};