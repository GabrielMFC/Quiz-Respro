import Button from "./Button";
import axios from "axios";
import "../styles/popUp.css"
import { useState } from "react";

export default function PopUp({type, title}) {
    const [active, setActive] = useState(true);
    const [inputValue, setInputValue] = useState("")
    async function addUserInfo() {
        try {
            await axios.post('/api/addUser', {
            Name: inputValue,
            Points: 0
            })
        } catch (error) {
            console.error('Erro ao criar usuário:', error.response?.data || error.message)
        }
    }
    return(
            type === "inputName" && active ? 
            <div className="popUpBackground">
                <div className="popUpContainer">
                    <h2>{title}</h2>
                    <input type="text" placeholder={title + "..."} value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <Button title="Confirmar" onClick={() => {
                        addUserInfo()
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