import { useState, useEffect, use } from "react"

const List = ({getItens}) => {
    const [itens, setItens] = useState([])

    useEffect(() => {
        console.log('buscando itens...')

        setItens(getItens())
    }, [getItens])


  return (
    <div>
        {itens && itens.map((item) => (
            <p key={item.id}>{item}</p>
        ))}
    </div>
  )
}

export default List