
import { useParams } from "react-router-dom";
import CategoryProducts from "../Compoments/CategoryProducts";

function ProductsbyCategory() {
  const { categoryId } = useParams();
  return (
    <div className="ProductsSegment">
      <CategoryProducts categoryId={categoryId} />
    </div>
  );
}

export default ProductsbyCategory;
