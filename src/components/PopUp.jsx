import Button from "./Button";
import axios from "axios";
export default function PopUp({type, title}) {
    async function addUserInfo() {
        try {
            const response = await axios.post('/api/add-user', {
            Name: 'Gabriel',
            Points: 0
            })

            console.log('Usuário criado:', response.data)
        } catch (error) {
            console.error('Erro ao criar usuário:', error.response?.data || error.message)
        }
    }
    return(
            type === "inputName" ? 
            <div className="popUpContainer">
                <h2>{title}</h2>
                <input type="text" placeholder={title + "..."} />
                <Button title="Confirmar" onClick={() => addUserInfo()}/>
            </div> : 

            type === "input" ?
            <div className="popUpContainer">
                <h2>{title}</h2>
                <input type="text" placeholder={title + "..."} />
                <Button title="Ok"/>
            </div> :
            
            type === "info" ?
            <div className="popUpContainer">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Button title="Ok"/>
            </div> : null 
    )
}