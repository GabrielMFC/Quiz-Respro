import PreHistoricWallpaper from "./../assets/prehistoric.jpg"
import AncientWallpaper from "./../assets/ancient.jpg"
import ModernityWallpaper from "./../assets/modernity.jpg"
import { PreHistoricQuestions, AncientQuestions, ModernityQuestions } from "./QuestionObj"

const Eras = {
    PreHistoric : {
        name: "Pré-história",
        color: "#af764d",
        textColor: "#ffffff",
        wallpaper: PreHistoricWallpaper,
        questions: PreHistoricQuestions
    },

    Ancient : {
        name: "Antiguidade",
        color: "#a9a9a9",
        textColor: "#ffffff",
        wallpaper: AncientWallpaper,
        questions: AncientQuestions
    },

    Modernity: {
        name: "Modernidade",
        color: "#000069",
        textColor: "#ffffff",
        wallpaper: ModernityWallpaper,
        questions: ModernityQuestions
    }
}

export default Eras