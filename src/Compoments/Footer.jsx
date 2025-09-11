
import { Instagram, Facebook } from "lucide-react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
        <img
          src="src/assets/Logo.png"
          alt="cotovia Logo"
          className="footer-logo"
        />
        </div>
        <div className="footer-section">
        </div>
        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <Instagram size={20} /> Instagram
          </a>
          <span style={{ margin: "0 8px" }}></span>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <Facebook size={20} /> Facebook
          </a>
          <h4>Contactos</h4>
          <p>Email: info@cotovia.com</p>
          <p>Telefone: +351 912 345 678</p>
           <p>&copy; {new Date().getFullYear()} Cotovia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
