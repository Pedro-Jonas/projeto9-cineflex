import Message from "../Message/Message";
import "./style.css";

export default function Sucess(){
    return(
    <>
    <div className="sucess">
        <Message text="Pedido feito" text2="com sucesso!"/>
    </div>
    </>
    );
}