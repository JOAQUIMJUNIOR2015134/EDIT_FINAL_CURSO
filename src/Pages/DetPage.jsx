import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SimpleCard from "../Compoments/SimpleCard";
import Breacker from "../Compoments/Breacker";
import CategoryList from "../Compoments/CategoryList";
import ProductsList from "../Compoments/ProductsList";

function ProductDet() {
  const { id } = useParams();
  console.log("ID do produto:", id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      const data = await response.json();
      console.log("Produto extraído:", data);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  console.log("Produto no estado:", product);

  if (!product) {
    return <div>Carregando produto...</div>;
  }

  return (
    <div className="ProdutsSegmentboard">
      <div className="ProdutsSegment2">
        <SimpleCard
          className="areaproduct01"
          image={
            product.images && product.images.length > 0 ? product.images[0] : ""
          }
        />
        <SimpleCard
          className="areaproduct02"
          title={product.title}
          description={product.description}
        />
        <SimpleCard
          className="areaproduct03"
          image={
            product.images && product.images.length > 0 ? product.images[0] : ""
          }
        />
        <SimpleCard
          className="areaproduct04"
          image={
            product.images && product.images.length > 0 ? product.images[0] : ""
          }
        />
      </div>

      <div className="Breacker">
        <Breacker text="BestSellers" />
      </div>

        <ProductsList />
    </div>
  );
}

export default ProductDet;
