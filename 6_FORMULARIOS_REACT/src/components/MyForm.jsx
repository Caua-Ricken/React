import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {

    {/*gerenciamento de dados*/}
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value)
    }

    //envio do form
    const handleSubmit = (e) => {
        e.preventDefault()

           console.log(name, email)
    }

  return (
    <div>
        {/*criação de form */}
        {/*envio de formulario*/}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">nome:</label>
                <input type="text" name='name' id='name' placeholder='nome' onChange={handleName} />
            </div>
            {/*label envolvendo o input*/}
            <label>
                <span>E-mail</span>
                <input type="text" name='email' placeholder='digite seu email' onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <input type="submit" value='enviar' />
        </form>
    </div>
  )
}

export default MyForm