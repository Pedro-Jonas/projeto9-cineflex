import {BrowserRouter, Routes, Route} from "react-router-dom";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import AllMovies from "./AllMovies/AllMovies"
import Time from "./Time/Time";
import Seats from "./Seats/Seats";
import Sucess from "./Sucess/Sucess";


function Top(){
    return(
    <div className="top">
        CINEFLEX
    </div> 
    );
};

export default function App(){
    return(
    //mudar o nome das rotas
    <>
    <BrowserRouter>
        <Top/>
        <Routes>
            <Route path="/" element={<AllMovies/>}/> 
            <Route path="/sessoes/:IdFilme" element={<Time/>}/>
            <Route path="/assentos/:IdSessao" element={<Seats/>}/>
            <Route path="/sucesso" element={<Sucess/>}/>
        </Routes>
    </BrowserRouter>
    </>   
    );
};