import PopUp from "./PopUp"
import { useUser } from "../globalContexts/UserContext"

export default function Era(){
    const {userName, setUserName, points, setPoints} = useUser()
    return(
        <div>
            <PopUp type={"inputName"} title={"Name"}/>
            <h1>Era</h1>
            <h1>{userName}</h1>
            <button onClick={() => setUserName("Gustave")}></button>
        </div>
    )
}