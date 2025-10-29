import Button from "./Button";
export default function PopUp({Type, title}) {
    return(
            Type === "input" ? 
            <div className="popUpContainer">
                <h2>{title}</h2>
                <input type="text" placeholder={title + "..."} />
                <Button title="Confirmar"/>
            </div> : 
            
            Type === "info" ?
            <div className="popUpContainer">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Button title="Ok"/>
            </div> : null 
    )
}