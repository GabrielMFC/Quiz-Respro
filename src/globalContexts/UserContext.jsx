import { createContext, useContext, useState } from 'react'
import Eras from '../dataStructuries/EraObj'

const UserContext = createContext()

export function UserProvider({ children }) {
  const [userName, setUserName] = useState('')
  const [points, setPoints] = useState(0)
  const [currentEra, setCurrentEra] = useState(Eras.PreHistoric)


  return (
    <UserContext.Provider value={{ userName, setUserName, points, setPoints, currentEra, setCurrentEra}}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}