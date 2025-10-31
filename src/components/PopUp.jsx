import Button from "./Button";
import { useUser } from "../globalContexts/UserContext";
import Swal from "sweetalert2";
import { useState } from "react";
import "../styles/popUp.css"

export default function PopUp({type, title}) {
    const [active, setActive] = useState(true);
    const [inputValue, setInputValue] = useState("")
    const {setUserName} = useUser()

    function verifyName(){
        if(inputValue === ""){
            Swal.fire({
                title: 'Apelido inválido!',
                text: 'O campo de apelido precisa ser preenchido!',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            return false
        }
    }

    return(
            type === "inputName" && active ? 
            <div className="popUpBackground">
                <div className="popUpContainer">
                    <h2>{title}</h2>
                    <input type="text" placeholder={"Apelido..."} value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <Button title="Confirmar" onClick={() => {
                        setUserName(inputValue)
                        if (!verifyName()) {
                            return
                        }
                        setActive(false)
                    }}/>
                </div>
            </div> : 

            type === "input" && active ?
            <div className="popUpContainer">
                <h2>{title}</h2>
                <input type="text" placeholder={title + "..."} />
                    <Button title="Ok" onClick={() => {
                        setActive(false)
                    }}/>
            </div> :
            
            type === "info" && active ?
            <div className="popUpContainer">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button title="Ok" onClick={() => {
                        setActive(false)
                    }}/>
            </div> : null 
    )
}