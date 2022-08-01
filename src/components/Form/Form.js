import { useState} from 'react';
import {useNavigate } from "react-router-dom";
import "./style.css"
import axios from "axios";

export default function Form(props){
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const ids = props.ids;
    const seats = props.names;
    const title = props.title;
    const day = props.day;
    const time = props.time;
    const navigate = useNavigate();
    let request = {};
    let info = {};
    
    function handleForm(e){
        e.preventDefault();
    }
    function submit(){
        if (ids.length !== 0){
            request = {
                cpf,
                name,
                ids,
            }
            info = {
                cpf,
                name,
                seats,
                title,
                day,
                time,
                ids,
            }
            if (request.cpf !== "" && request.name !== ""){
                axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', request);
                navigate("/sucesso", {state:{info}})
            }
        }
    }

    return(
    <>
    <form onSubmit={handleForm}>
        <div className="inputs">
        <div className="input">
            <div className="name">
                Nome do comprador:
            </div>
            <input type="text" onChange={(e)=> setName(e.target.value)} required  placeholder="Digite seu Nome..." />
        </div>
        <div className="input" >
            <div className="name">
                CPF do comprador:
            </div>
            <input type="text" onChange={(e)=> setCpf(e.target.value)} required  placeholder="Digite seu CPF..." />
        </div>  
        </div>
        <div>
        <button  onClick={()=> submit()}>
            Reservar assento(s)
        </button>
        </div>
	</form>
    </>)
}
