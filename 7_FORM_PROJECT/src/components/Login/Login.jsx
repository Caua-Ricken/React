import { useState } from 'react'
import './Login.css'
import { FaUser, FaLock } from 'react-icons/fa'

const Login = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        alert('enviando os dados: ' + userName + ' - ' + password)

        setUserName('')
        setPassword('')
    }

  return (
    <div className="container">
          <form onSubmit={handleSubmit}>
              <h1>Acesse o Sistema</h1>
              <div className='input-field'>
                  <input type="email" placeholder='E-mail' onChange={(e) => setUserName(e.target.value)} value={userName} required />
                  <FaUser className='icon' />
              </div>
              <div className='input-field'>
                  <input type="password" placeholder='senha' onChange={(e) => setPassword(e.target.value)} value={password} required/>
                  <FaLock className='icon' />
              </div>

              <div className="recall-fotget">
                  <label>
                      <input type="checkbox" />
                      lembrar de mim
                  </label>
                   <a href="#">esqueceu a senha?</a>
              </div>

              <button>entrar</button>

              <div className="signup-link">
                  <p>não tem uma conta? <a href="#">registrar</a> </p>
              </div>
          </form>
    </div>
  )
}

export default Login