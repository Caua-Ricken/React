import { createContext } from "react";

export const SomeContext = createContext();

export const HookUseContext = ({children}) => {

    const contextValue = 'valor do texto'

    return(
        <SomeContext.Provider value={{contextValue}}>
            {children}
        </SomeContext.Provider>
    )
}
