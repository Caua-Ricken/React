import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () => {
    const context = useContext(TitleColorContext)

    if(!context) {
        console.log('não foi encontrado o contexto')
        return
    }

    console.log('contexto encontrado')
    return context;
}