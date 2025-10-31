import Question from "./Question.jsx";
import "../../styles/quiz.css"

export default function Quiz({setIsQuizActive}) {
    return (
        <>
            <Question setIsQuizActive={setIsQuizActive}/>
        </>
    )
}