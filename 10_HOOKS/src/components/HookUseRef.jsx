import React, { useEffect, useRef, useState } from 'react'

const HookUseRef = () => {
    //useRef
    const numberRef = useRef(0);
    const [count, setCount] = useState(0);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        numberRef.current = numberRef.current + 1;
    })

    // 2 - useRef e a DOM
    const inputRef = useRef()
    const [text,setText] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        
        setText('')
        
        inputRef.current.focus()
    }

  return (
    <div>
        {/* useRef */}
        <h2>useRef</h2>
        <p>componente acessou o valor dele {numberRef.current} vezes</p>
        <p>valor: {count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>contador A</button>

        <p>valor: {counter}</p>
        <button onClick={() => setCounter((prev) => prev + 1)}>contador B</button>

        {/* useRef e a DOM*/}
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="submit" value='enviar' />
        </form>

        <hr />
    </div>
  )
}

export default HookUseRef