import { useContext } from "react";
import { TitleContextColor } from "../context/TitleContextColor";

export const useTitleColor = () => {

    const contextColor = useContext(TitleContextColor)

    if(!contextColor) {
        console.log('sem provider')
    }

    return contextColor;
}