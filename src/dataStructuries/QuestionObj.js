const easy = 55
const medium = 120
const hard = 205

const PreHistoricQuestions = [
    {
        question: "Quanto é 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4",
        difficulty: easy
    },
    {
        question: "Quanto é 3 x 3?",
        options: ["3", "12", "9", "6"],
        answer: "9",
        difficulty: easy
    },
    {
        question: "Quanto é 50 + 101?",
        options: ["152", "151", "51", "100"],
        answer: "151",
        difficulty: easy
    }
]

const AncientQuestions = [
    // {
    //     question: "Quem inventou a matemática?",
    //     options: ["Pitágoras", "Platão", "Ninguem", "Foi uma invenção coletiva"],
    //     answer: "Foi uma invenção coletiva",
    //     difficulty: easy
    // },

    // {
    //     question: "Quem foi dito acreditar que a matemática funcionava como ferramenta para afiar o raciocínio?",
    //     options: ["Platão", "Aristóteles", "Diôgenes", "Sócrates"],
    //     answer: "Platão",
    //     difficulty: medium
    // },
    {
        question: "Segundo um filósofo citado na apresentação, qual era o papel da matemática na formação do filósofo?",
        options: ["Preparar a mente.", "Ensinar apenas técnicas de contagem.", "Substituir o estudo da filosofia.", "Servir como passatempo."],
        difficulty: hard
    }
]

const ModernityQuestions = [
    {
        question: "Qual era o comprimento do ENIAC?",
        options: ["30 metros", "10 metros", "40 metros", "20 metros"],
        answer: "30 metros",
        difficulty: easy
    },    
    {
        question: "Qual era o consumo de energia do ENIAC?",
        options: ["100KW", "200 KW", "400 KW", "150 KW"],
        answer: "150 KW",
        difficulty: medium
    },    
    {
        question: 'O que a sigla "ENIAC" significa?',
        options: [
            "Electronic Numerical Integrated Accounting Computer",
            "Enhanced Networked Intelligent Analysis Console",
            "Electrical Node Interfaced Arithmetic Calculator",
            "Electronic Numerical Integrator and Computer"
        ],
        answer: "Electronic Numerical Integrator and Computer",
        difficulty: hard
    }
]

export {PreHistoricQuestions, AncientQuestions, ModernityQuestions}