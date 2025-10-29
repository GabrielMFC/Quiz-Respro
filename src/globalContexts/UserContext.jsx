import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export function UserProvider({ children }) {
  const [userName, setUserName] = useState('')
  const [points, setPoints] = useState(0)

  return (
    <UserContext.Provider value={{ userName, setUserName, points, setPoints }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}