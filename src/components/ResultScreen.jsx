import { useUser } from "../globalContexts/UserContext"
import { usePage } from "../globalContexts/PageProvider"
import Eras from "../dataStructuries/EraObj"
import { useEffect } from "react"
import axios from "axios"

export default function ResultScreen() {
    const { userName, points, setPoints, setCurrentEra } = useUser()
    const { setPage } = usePage()

    useEffect(() => {
        async function postPoints() {
            try {
                await axios.post('/api/addUser', {
                    Name: userName,
                    Points: points
                })
            } catch (error) {
                console.error('Erro ao criar usuário:', error.response?.data || error.message)
            }
        }

        postPoints()
    }, [])

    function resetQuiz() {
        setPoints(0)
        setPage("Era")
        setCurrentEra(Eras.PreHistoric)
    }

    return (
        <div>
            <h1>{userName + " o seu total de pontos foi: " + points}</h1>
            <button onClick={resetQuiz}>Recomeçar Quiz</button>
        </div>
    )
}
