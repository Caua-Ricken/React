import { createContext, useState, useEffect } from "react"

export const CountdownContext = createContext()

export const CountdownContextProvider = ({ children }) => {
  const [event, setEvent] = useState(() => {
    const savedEvent = localStorage.getItem("event")
    return savedEvent ? JSON.parse(savedEvent) : null
  })

  useEffect(() => {
    if (event) {
      localStorage.setItem("event", JSON.stringify(event))
    }
  }, [event])

  return (
    <CountdownContext.Provider value={{ event, setEvent }}>
      {children}
    </CountdownContext.Provider>
  )
}
