import React from 'react';
import SimpleCard from './SimpleCard';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function CategoryProducts({ categoryId }) {
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    if (!categoryId) return;
    const fetchProducts = async () => {
      const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`);
      const data = await response.json();
      setCategoryProducts(data);
    };
    fetchProducts();
  }, [categoryId]);

  return (
    <div className="HighlightedProductCategoryCard">
      {categoryProducts.length > 0 ? (
        categoryProducts.map((product) => {
          return (
            <Link to={`/detpage/${product.id}`} key={product.id}>
              <SimpleCard
                key={product.id}
                className="simpleCardDefaut"
                image={product.images && product.images.length > 0 ? product.images[0] : ""}
                title={product.title}
                description={product.description}
              />
            </Link>
          );
        })
      ) : (
        <p>Nenhum produto encontrado.</p>
      )}
    </div>
  );
}

export default CategoryProducts;
