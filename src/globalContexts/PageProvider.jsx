import { createContext, useContext, useState } from "react";
export const PageContext = createContext()

export function PageProvider({ children }) {
  const [page, setPage] = useState("InitialPage")

  return (
    <PageContext.Provider value={{ page, setPage}}>
      {children}
    </PageContext.Provider>
  )
}

export function usePage() {
  return useContext(PageContext)
}