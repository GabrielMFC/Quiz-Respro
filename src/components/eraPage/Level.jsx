import "../../styles/eraLevels.css"
import { useUser } from "../../globalContexts/UserContext"

export default function Level({level}) {
    const {currentEra} = useUser()
    return(
        <div className="level" style={{backgroundColor: currentEra.color}}>
            <h1 style={{color: currentEra.textColor}}>{level}</h1>
        </div>
    )   
}