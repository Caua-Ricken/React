import { Link, NavLink } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
        {/*<Link to='/'>Home</Link>
        <Link to='/Contact'>Contact</Link>*/}

        <NavLink to='/' className={({isActive}) => (isActive ? 'active': '')}>Home</NavLink>
        <NavLink to='/Contact' className={({isActive}) => (isActive ? 'active': '')}>Contact</NavLink>
    </div>
  )
}

export default NavBar