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
    <>
    <BrowserRouter>
        <Top/>
        <Routes>
            <Route path="/" element={<AllMovies/>}/> 
            <Route path="/sessoes/:idFilme" element={<Time/>}/>
            <Route path="/assentos/:idSessao" element={<Seats/>}/>
            <Route path="/sucesso" element={<Sucess/>}/>
        </Routes>
    </BrowserRouter>
    </>   
    );
};