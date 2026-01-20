// 1 - criar context
import { createContext, useState } from "react";

export const CounterContext = createContext(); // esse é onde importamos sempre para usar


// 2 - criar provider
// children = encapsular elementos e continuar imprimindo o conteudo deles dentro de um outros componete
export const CounterContextProvider = ({children}) => { // esse apenas 1 vez no main normalmente para prover
    const [count, setCount] = useState(5)

    return (
        <CounterContext.Provider value={{count, setCount}}>{children}</CounterContext.Provider>
    )

}