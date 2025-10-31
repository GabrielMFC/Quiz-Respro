import PopUp from "../PopUp"
import TopBar from "../TopBar"
import StartButton from "./StartButton"
import Quiz from "../quiz/Quiz"
import { useState } from "react"
import { useUser } from "../../globalContexts/UserContext"
import "../../styles/era.css"

export default function Era(){
    const {userName,currentEra} = useUser()
    const [isQuizActive, setIsQuizActive] = useState(false)
    console.log(userName);
    
    return(
        !isQuizActive ? 
        <div>
            <TopBar/>
           {!userName ? <PopUp type={"inputName"} title={"Name"}/> : null}
            <div style={{backgroundImage: `url(${currentEra.wallpaper})`}} className="eraBackground"></div>
            <StartButton setIsQuizActive={setIsQuizActive}/>
        </div>
        :
        <div>
            <TopBar/>
            <div style={{backgroundImage: `url(${currentEra.wallpaper})`}} className="eraBackground"></div>
            <Quiz setIsQuizActive={setIsQuizActive}/>
        </div>
    )
}