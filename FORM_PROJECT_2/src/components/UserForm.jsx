import React from 'react'

const UserForm = ({data, updateFiledHnadler}) => {


  return (
    <div>
       <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input type="text" name='text' id='name' placeholder='Digite seu nome' required value={data.name || ''} onChange={(e) => updateFiledHnadler('name', e.target.value)}/>
       </div>

       <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input type="email" name='text' id='email' placeholder='Digite seu email' required value={data.email || ''} onChange={(e) => updateFiledHnadler('email', e.target.value)}/>
       </div>
    </div>
  )
}

export default UserForm