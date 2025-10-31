import { useState } from 'react'
import './styles/App.css'
import Home from './components/Home'
import Era from "./components/eraPage/Era"
import Quiz from './components/quiz/Quiz'
import ResultScreen from './components/ResultScreen'
import { PageProvider, usePage } from './globalContexts/PageProvider'
import { UserProvider } from './globalContexts/UserContext'

function PageRenderer({ propsManager, setPropsManager }) {
    const { page } = usePage()

    const pages = {
      Home,
      Era,
      Quiz,
      ResultScreen
    }

    const PageComponent = pages[page] || Home

    return (
        <PageComponent setPropsManager={setPropsManager} propsManager={propsManager}/>
    )
}

export default function App() {
  const [propsManager, setPropsManager] = useState("")
  return (
    <PageProvider>
      <UserProvider>
        <div className="AppContainer">
          <PageRenderer setPropsManager={setPropsManager} propsManager={propsManager}/>
        </div>
      </UserProvider>
    </PageProvider>
  )
}