import { createContext, useReducer } from "react";

const colorTitle = {
    color: "purple"
}

export const title = (state, action) => {

    switch(action.type) {
        case 'RED':
            return {...state, color: 'red'}
        case "BLUE":
            return {...state, color: 'blue'}    
        default:
            return state    
    }
}

export const TitleContextColor = createContext();

export const TitleContextColorProvider = ({children}) => {

    const [state, dispatch] = useReducer(title, colorTitle)

    return(
        <TitleContextColor.Provider value={{state, dispatch}}>{children}</TitleContextColor.Provider>
    )
}