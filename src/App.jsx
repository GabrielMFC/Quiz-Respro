import { useState } from 'react'
import './styles/App.css'
import Home from './components/Home'
import Era from "./components/Era"
import { PageProvider, usePage } from './globalContexts/PageProvider'

function PageRenderer({ propsManager, setPropsManager }) {
    const { page } = usePage()

    const pages = {
      Home,
      Era
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
      <div className="AppContainer">
        <PageRenderer setPropsManager={setPropsManager} propsManager={propsManager}/>
      </div>
    </PageProvider>
  )
}