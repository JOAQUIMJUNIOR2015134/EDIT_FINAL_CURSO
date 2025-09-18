import { useEffect, useState } from "react";
import SimpleCard from "./SimpleCard";
import { Link } from "react-router-dom";
import "../Styles/SimpleCard.css";

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=4");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="HighlightedProductSectionCard">
      {products.slice(0, 4).map((product) => {
        console.log('Produto:', product);
        return (
          <Link to={`/detpage/${product.id}`} key={product.id}>
            <SimpleCard
              className="simpleCardDefaut"
              image={product.images && product.images.length > 0 ? product.images[0] : ""}
              title={product.title} 
              description={product.description}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsList;