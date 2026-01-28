import { useEffect, useState } from "react"

const HookUseEffect = () => {

    // 1 - useEffect sem dependências
    useEffect(() => {
        console.log('useEffect foi chamado!')
    })

    const [number, setNumber] = useState(1)

    const changeNumber = () => {
        setNumber((prev) => prev + 1)
    }

    // 2 - array de dependências vazio
    useEffect(() => {
        console.log('serei executado apenas uma vez!')
    }, [])

    // 3 - item no array de dependências
    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {
        if(anotherNumber > 0){
            console.log('serei executado apenas quando anotherNumber mudar!')
        }  
    }, [anotherNumber])

    // 4 - cleanup do useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('hello world!')

        }, 2000)

        return () => clearTimeout(timer)
    }, [anotherNumber])



  return (
    <div>
        <h2>useEffect</h2>
        <p>numero: {number}</p>
        <button onClick={changeNumber}>aumentar</button>

        <p>outro numero: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber((prev) => prev + 1)}>mudar another number</button>

        <hr />
    </div>
  )
}

export default HookUseEffect