import PopUp from "../PopUp"
import TopBar from "../TopBar"
import EraLevels from "./EraLevels"
import { useUser } from "../../globalContexts/UserContext"
import "../../styles/era.css"

export default function Era(){
    const {currentEra} = useUser()
    return(
        <div>
            <TopBar/>
            {/* <PopUp type={"inputName"} title={"Name"}/> */}
            <div style={{backgroundImage: `url(${currentEra.wallpaper})`}} className="eraBackground"></div>
            <EraLevels/>
        </div>
    )
}