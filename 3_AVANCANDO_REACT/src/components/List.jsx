import { useState } from "react"

const List = () => {

    {/* lista simples */}
    const [list] = useState(['caua', 'juca', 'jonas', 'juca'])


    {/* lista complexa */}
    const [users, setUsers] = useState([
        {id: 1, name:'caua', age:31},
        {id: 2, name:'tone', age:1},
        {id: 3, name:'juba', age:99}
    ]) 


    {/* deletando usuarios da lista */}
    const deleteUser = () => {

        const userNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => 
           prevUsers.filter((users) => userNumber !== users.id))
    }

  return (
    <div>
        {/* render sem key */}
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>

        {/* render com key */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age} anos
                </li>
            ))}
        </ul>

        {/* previus state */}
        <button onClick={deleteUser}>deletar user</button>
    </div>
  )
}

export default List