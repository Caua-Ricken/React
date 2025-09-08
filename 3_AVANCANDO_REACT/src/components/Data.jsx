import { useState } from "react"

const Data = () => {
    let someData = 10

    const [anotherNumber, setAnotherNumber] = useState(15)

    const [testeNumber, setTesteNumber] = useState(1)


  return (
    <div>
        <div>
            <p>valor: {someData}</p>
            <button onClick={() => (someData = 15)}>mudar variavel</button>
        </div>
        <div>
            <p>valor: {anotherNumber}</p>
            <button onClick={() => (setAnotherNumber(20))}>mudar state</button>
        </div>
         <div>
            <p>valor: {testeNumber}</p>
            <button onClick={() => (setTesteNumber(999))}>mudar state</button>
        </div>
    </div>
  )
}

export default Data