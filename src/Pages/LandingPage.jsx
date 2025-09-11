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
    title={"o meu"}
    description={""}
    image={""}
    />
   </div>

   <div className="ProductSectionCard">
        <SimpleCard
          className="simpleCardDefaut"
          title="Ofertas Especiais"
          description="Confira os nossos novos produtos!"
        />
        <SimpleCard
        className="simpleCardDefaut"
          title="Wines"
          description="Confira os nossos novos produtos!"
        />
        <SimpleCard
        className="simpleCardDefaut"
          title="Beer"
          description="Confira os nossos novos produtos!"
        />
        <SimpleCard
        className="simpleCardDefaut"
          title="Sales"
          description="Confira os nossos novos produtos!"
        />
      </div>

      <div className="Breacker">
        <Breacker text="BestSellers" />
      </div>

         <div className="HighlightedProductSectionCard">
        <CategoryList />
      </div>
    </>
  );
}

export default LandingPage;