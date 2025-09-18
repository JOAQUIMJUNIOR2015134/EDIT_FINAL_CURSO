import { useState, useEffect } from "react";
import SimpleCard from "./SimpleCard";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=100&search=" + query);
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, [query]);

  useEffect(() => {
    if (query.trim() === "") {
      setFiltered([]);
    } else {
      setFiltered(
        products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
      );
    }
  }, [query, products]);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Pesquisar produtos..."
        value={query}
        onChange={handleChange}
      />
      {filtered.length > 0 && (
        <div className="search-results">
          {filtered.map(product => (
            <SimpleCard
              title={product.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;