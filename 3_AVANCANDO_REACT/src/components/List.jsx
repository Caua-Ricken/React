import { useState } from "react"

const List = () => {

    const [list] = useState(['caua', 'juca', 'jonas', 'juca'])

    const [users, setUsers] = useState([
        {id: 1, name:'caua', age:31},
        {id: 2, name:'tone', age:1},
        {id: 3, name:'juba', age:99}
    ]) 

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
    </div>
  )
}

export default List