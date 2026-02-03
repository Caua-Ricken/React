import { useLayoutEffect, useEffect, useState, use } from "react"

const HookUseLayoutEffect = () => {

    const [name, setNmae] = useState("algum nome")

    useEffect(() => {
        console.log('2')
        setNmae('mudou o nome!')
    }, [])

    useLayoutEffect(() => {
        console.log('1')
        setNmae('outro nome!')
    }, [])
    
    console.log(name)
  return (
    <div>
        <h2>useLayoutEffect</h2>
        <p>{name}</p>
        <hr />
    </div>
  )
}

export default HookUseLayoutEffect
