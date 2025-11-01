import { useUser } from "../../globalContexts/UserContext"
import {usePage} from "../../globalContexts/PageProvider"
import { useState } from "react"
import Eras from "../../dataStructuries/EraObj"
import ResultScreen from "../ResultScreen"

export default function Question({setIsQuizActive}) {
    const { currentEra, points, setPoints, setCurrentEra } = useUser()
    const {setPage} = usePage()

    const [questionIndex, setQuestionIndex] = useState(getRandomQuestion())
    const [answeredCount, setAnsweredCount] = useState(0)

    function getRandomQuestion(prevIndex = null) {
        let random
        do {
            random = Math.floor(Math.random() * currentEra.questions.length)
        } while (random === prevIndex && currentEra.questions.length > 1)
        return random
    }

    const currentQuestion = currentEra.questions[questionIndex]

    function verifyAnswer(option) {
        if (option === currentQuestion.answer) {
            const newPoints = points + currentQuestion.difficulty
            setPoints(newPoints)
        }

            const nextCount = answeredCount + 1
            setAnsweredCount(nextCount)

            if (nextCount >= 3) {
                if(currentEra == Eras.PreHistoric){
                    setCurrentEra(Eras.Ancient)
                } else if(currentEra == Eras.Ancient){
                    setCurrentEra(Eras.Modernity)
                } else{
                    setPage("ResultScreen")
                    setIsQuizActive(false)
                    return
                }
                setPage("Era")
                setIsQuizActive(false)
                return
            }

            const newIndex = getRandomQuestion(questionIndex)
            setQuestionIndex(newIndex)
    }

    return (
        <div className="questionContainer" style={{ backgroundColor: currentEra.color }}>
            <h1 className="questionTitle" style={{ color: currentEra.textColor }}>{currentQuestion.question}</h1>

            <div className="optionsContainer">
                {currentQuestion.options.map((option, i) => (
                    <button
                        key={i}
                        className="option"
                        style={{ color: currentEra.textColor }}
                        onClick={() => verifyAnswer(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    )
}
