import Message from "../Message/Message";
import "./style.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sucess(){
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();

    function home(){
        navigate("/");
    }
    return(
    <>
    <div className="sucess">
        <Message text="Pedido feito" text2="com sucesso!"/>
    </div>
    <div className="info">
        <div className="filme">
            <p>Filme e sessão</p>
            <h1>{data.info.title}</h1>
            <div className="data">
                <h1>{data.info.day}</h1>
                <h1>{data.info.time}</h1>
            </div>
        </div>
        <div className="ingressos">
            <p>Ingressos</p>
            {data.info.seats.map((seat)=> {return(<h1>Assento {seat}</h1>)})}
        </div>
        <div className="comprador">
            <p>Comprador</p>
            <h1>nome: {data.info.name}</h1>
            <h1>CPF: {data.info.cpf}</h1>
        </div>
        <div className="home">
            <div className="button-home" onClick={home}>
                Voltar pra Home
            </div>
        </div>
    </div>
    </>
    );
}