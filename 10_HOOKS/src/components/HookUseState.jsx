import { useState } from "react"

const HookUseState = () => {

  // pt1 useState

    let userName = 'joão'

    const [name, setName] = useState('maria')

    const changeName = () => {
      userName = 'João souza'
      setName('caua')

      console.log(name)
      console.log(userName)
    }

  // pt2 useState
  
  const [age, setAge] = useState(10)

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(age)
  }

  return (
    <div>
      {/* pt1 */}
      <h2>useState</h2>
      <p>variavel: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeName}>Mudar nomes</button>

      {/* pt2 */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />

        <input type="submit" value="enviar" />
      </form>

      <p>você tem {age} anos</p>

      <hr />
    </div>
  )
}

export default HookUseState