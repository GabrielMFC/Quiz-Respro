import "../../styles/eraLevels.css"
import { useUser } from "../../globalContexts/UserContext"

export default function StartButton({setIsQuizActive}) {
    const { currentEra } = useUser();

    return(
        <div className="levelContainer">
            <div className="startButton">
                <button style={{backgroundColor: currentEra.color,color: currentEra.textColor}} onClick={() => setIsQuizActive(true)}>Começar Quiz</button>
            </div>
        </div>
    )   
}