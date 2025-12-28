import { useState } from 'react'
import './MyForm.css'

const MyForm = ({userName , userEmail}) => {

    {/*gerenciamento de dados*/}
    const [name, setName] = useState(userName)
    const [email, setEmail] = useState(userEmail)

    const [bio, setBio] = useState('')

    const [role, setRole] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    //envio do form
    const handleSubmit = (e) => {
        e.preventDefault()

        //limpar o form
        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }
    
     console.log(name, email, bio, role)


  return (
    <div>
        {/*criação de form */}
        {/*envio de formulario*/}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">nome:</label>
                <input type="text" name='name' id='name' placeholder='nome' onChange={handleName} value={name}/>
            </div>
            {/*label envolvendo o input*/}
            <label>
                <span>E-mail</span>
                <input type="text" name='email' placeholder='digite seu email' onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            {/*textarea*/}
            <label>
                <span>bio:</span>
                <textarea name="bio" placeholder='descrição do user' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/*select*/}
            <label>
                <span>função sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">usuario</option>
                    <option value="editor">editor</option>
                    <option value="maestro">maestro</option>
                </select>
            </label>
            <input type="submit" value='enviar' />
        </form>
    </div>
  )
}

export default MyForm