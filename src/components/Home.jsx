import Button from "./Button";
import "../styles/home.css";

export default function Home(){
    return(
        <div className="homeContainer">
            <h1>Quiz <span className="RESPROtitle">RESPRO</span></h1>
            <Button title={"Jogar"}/>
        </div>
    )
}