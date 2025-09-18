import Breacker from "../Compoments/Breacker";
import CategoryList from "../Compoments/CategoryList";
import Footer from "../Compoments/Footer";
import SimpleCard from "../Compoments/SimpleCard";
import "../Styles/SimpleCard.css";


function LandingPage() {
  return (
    <>
      <div className="HeroCard">
        <SimpleCard
          className="simpleCardDefaut"
          title="Novidades"
          description="Confira os nossos novos produtos!"
          image="/1.jpg"
        />
      </div>

      <div className="ProductSectionCard">
        <SimpleCard
          className="simpleCardDefaut"
          title="Ofertas Especiais"
          description="Confira os nossos novos produtos!"
          image="/5.png"
        />
        <SimpleCard
          className="simpleCardDefaut"
          title="Hoddies"
          description="Confira os nossos novos produtos!"
          image="/4.png"
        />
        <SimpleCard
          className="simpleCardDefaut"
          title="Vestidos"
          description="Confira os nossos novos produtos!"
          image="/3.png"
        />
        <SimpleCard
          className="simpleCardDefaut"
          title="Camisas"
          description="Confira os nossos novos produtos!"
          image="/2.png"
        />
      </div>

      <div className="Breacker">
        <Breacker text="BestSellers" />
      </div>
      <div>
        <CategoryList />
        </div>
    </>
  );
}

export default LandingPage;
