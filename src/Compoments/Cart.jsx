import { ShoppingBag } from "lucide-react";
import "../Styles/ShopCart.css";

function ShoppingCart({ count = 0 }) {
  return (
    <div className="shopping-cart" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <ShoppingBag size={28} color="#212529" />
      {count > 0 && (
        <span className="cart-count">
          {count}
        </span>
      )}
    </div>
  );
}

export default ShoppingCart;