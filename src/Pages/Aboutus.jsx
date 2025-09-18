import { useParams } from "react-router-dom";
import "../styles/Aboutcard.css";
import AboutCard from "../Compoments/aboutuscard";

function Aboutus() {
  return (

    <div className="Aboutushero">
    <div className="Aboutusgrid">
      <div className="AboutusCard">
      <AboutCard
        img="/aboutus.png"
        text="Sobre Nós"
        desc="A Cotovia é uma marca de roupas que nasceu da paixão por moda e estilo. Fundada em 2020, nossa missão é oferecer peças de alta qualidade que combinam conforto e elegância para todas as ocasiões. Acreditamos que a moda é uma forma de expressão pessoal, e estamos aqui para ajudar você a encontrar seu estilo único."
      />
      </div>
      <div className="aboutuscardimg">
      <AboutCard
        className="aboutuscardimgdet"
        src="/1.jpg"
      />
      </div>

      </div>
      <div className="Aboutusgrid">
        <div className="aboutuscardimg">
      <AboutCard
        className="aboutuscardimgdet"
        src="/2.png"
      />
      </div>

      <div className="AboutusCard">
      <AboutCard
        text="Nossos Valores"
        desc="Na Cotovia, valorizamos a qualidade, a inovação e o atendimento ao cliente. Estamos comprometidos em criar um ambiente inclusivo onde todos se sintam bem-vindos e valorizados. Acreditamos que a moda deve ser acessível a todos, sem comprometer o estilo ou a qualidade."
      />
</div>
      </div>
    </div>
  );
}

export default Aboutus;
