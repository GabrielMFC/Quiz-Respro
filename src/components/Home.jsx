import { usePage } from "../globalContexts/PageProvider";
import Button from "./Button";
import "../styles/home.css";

export default function Home(){
    const { setPage } = usePage();
    return(
        <div className="homeContainer">
            <h1>Quiz <span className="RESPROtitle">RESPRO</span></h1>
            <Button title={"Jogar"} onClick={() => setPage("Era")}/>
        </div>
    )
}