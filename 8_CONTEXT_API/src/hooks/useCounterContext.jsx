import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounterContext = () => {
    const contexto = useContext(CounterContext)

    if(!contexto){
        console.log('não existe nada aqui')
        return;
    }

    console.log(contexto)
    return contexto;
}