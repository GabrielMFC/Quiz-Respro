import { useUser } from "../globalContexts/UserContext"
import "../styles/topBar.css"

export default function TopBar(){
    const {currentEra, points} = useUser()

    return(
        <div className="topBarContainer" style={{backgroundColor: currentEra.color}}>
            <h1 className="era">{currentEra.name}</h1>
            <h2 className="points">pontos: {points}</h2>
        </div>
    )
}