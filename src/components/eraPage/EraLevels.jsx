import Level from "./Level"
import "../../styles/eraLevels.css"

export default function EraLevels(){
    return(
        <div className="levelContainer">
            <Level level={1}/>
            <Level level={2}/>
        </div>
    )
}