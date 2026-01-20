// 1 - criar o context
import { createContext, useState } from "react";

export const CounterContext = createContext()

// 2 - criando o provider 
// children = encapsular elementos e continuar imprimindo o conteudo deles dentro de um outros componete
export const CounterContextProvider = ({children}) => {
    const [count, setCount] = useState(0)

    return (
        <CounterContext.Provider value={{count, setCount}}>{children}</CounterContext.Provider>
    
  )
}

