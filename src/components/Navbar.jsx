import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to={'/home'}>Games</Link>
      </h2>
      <ul>
        <li>
          <Link to={'/home'}>Home</Link>
        </li>
        <li>
          <Link to={'/'} className="new-btn">New Genre</Link>
        </li>
        <li>
          <Link to={'/'}>Editar</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar