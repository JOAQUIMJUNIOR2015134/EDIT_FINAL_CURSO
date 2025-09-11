
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import SearchBar from "./SearchBar";
import "../Styles/SearchBar.css";
import ShoppingCart from "./Cart";

function NavBar(){
    return(<div className="navbar">
      <Link to="/">
        <img
          src="src/assets/Logo.png"
          alt="cotovia Logo"
          className="navbar-logo"
        />
      </Link>
      <nav className="navbar-links">
        <Link to="/products" className="navbar-link">Produtos</Link>
        <Link to="/about" className="navbar-link">Quem Somos</Link>
        <Link to="/contact" className="navbar-link">Contactos</Link>
      </nav>
      <SearchBar></SearchBar>
      <ShoppingCart count={3}></ShoppingCart>
    </div>
    );
}
export default NavBar;