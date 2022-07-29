import "./style.css"

export default function Footer(props){
    return(
    <div className="footer">
        <div className="back-image">
            <img src={props.url} alt="poster"/>
        </div>
        <div className="description">
        <p>{props.title}</p>
        {props.day? (<p>{props.day} - {props.time}</p>):("")}
        </div>
    </div>
    );
};
