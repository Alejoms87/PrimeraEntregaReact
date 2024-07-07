import './NavBar.css'
import CarWidget from './CarWidget'
import Ecommerce from '../../Ecommerce.jsx'

const NavBar = () => {
  return (
    <nav className="navbar">
      <Ecommerce />
        <ul>
            <li> Comics </li>
            <li> Funkos </li>
            <li> Juegos </li>
        </ul>
        
        <CarWidget />
        
    </nav>
  )
}

export default NavBar