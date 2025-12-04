import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/Contact'>Contact</Link>
    </div>
  )
}

export default NavBar