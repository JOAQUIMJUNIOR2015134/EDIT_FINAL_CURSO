import { useState, useEffect, use } from "react";
import Breacker from "../Compoments/Breacker";
import SimpleCard from "../Compoments/SimpleCard";
import "../Styles/SimpleCard.css";
import ProductsList from "../Compoments/ProductsList";

function ProductSegment() {
  console.log("ID do produto:");
  const [segment, setSegment] = useState(null);

  useEffect(() => {
    const fetchSegment = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/categories`
      );
      const data = await response.json();
      setSegment(data);
    };
    fetchSegment();
  }, []);

  console.log("Produto no estado:", segment);

  if (!Array.isArray(segment) || segment.length < 5) {
    return <div>Erro: categorias insuficientes ou não carregadas.</div>;
  }

  return (
    <>
      <div className="ProdutsSegmentboard">
        <div>
          <div className="ProdutsSegment">
            {/* Render only if the required category exists */}
            {segment[2] && (
              <SimpleCard
                className="areared01"
                title={segment[2].name}
                onClick={() =>
                  (window.location.href = `/productsbycategory/${segment[2].id}`)
                }
              />
            )}
            {segment[1] && (
              <SimpleCard
                className="areared02"
                image={segment[1].image}
                onClick={async () => {
                  try {
                    const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${segment[1].id}/products?limit=1`);
                    const products = await res.json();
                    if (products.length > 0) {
                      window.location.href = `/detpage/${products[0].id}`;
                    }
                  } catch (e) {
                    alert('Erro ao buscar produto da categoria!');
                  }
                }}
              />
            )}
            {segment[2] && (
              <SimpleCard
                className="areared03"
                image={segment[2].image}
                onClick={async () => {
                  try {
                    const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${segment[2].id}/products?limit=1`);
                    const products = await res.json();
                    if (products.length > 0) {
                      window.location.href = `/detpage/${products[0].id}`;
                    }
                  } catch (e) {
                    alert('Erro ao buscar produto da categoria!');
                  }
                }}
              />
            )}
            {segment[4] && (
              <SimpleCard
                className="areared04"
                image={segment[4].image}
                onClick={async () => {
                  try {
                    const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${segment[4].id}/products?limit=1`);
                    const products = await res.json();
                    if (products.length > 0) {
                      window.location.href = `/detpage/${products[0].id}`;
                    }
                  } catch (e) {
                    alert('Erro ao buscar produto da categoria!');
                  }
                }}
              />
            )}
            {segment[4] && (
              <SimpleCard
                className="simpleboard05"
                image={segment[4].image}
                onClick={async () => {
                  try {
                    const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${segment[4].id}/products?limit=1`);
                    const products = await res.json();
                    if (products.length > 0) {
                      window.location.href = `/detpage/${products[0].id}`;
                    }
                  } catch (e) {
                    alert('Erro ao buscar produto da categoria!');
                  }
                }}
              />
            )}
          </div>
        </div>

        <div>
          <div className="ProdutsSegment">
            <SimpleCard
              className="areablue01"
              title={segment[3].name}
              onClick={() =>
                (window.location.href = `/productsbycategory/${segment[3].id}`)
              }
            />
            <SimpleCard className="areablue02" image={segment[2].image} onClick={async () => {
                try {
                  const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${segment[4].id}/products?limit=1`);
                  const products = await res.json();
                  if (products.length > 0) {
                    window.location.href = `/detpage/${products[0].id}`;
                  }
                } catch (e) {
                  alert('Erro ao buscar produto da categoria!');
                }
              }}
            />
            <SimpleCard className="areablue03" image={segment[2].image} onClick={async () => {
                try {
                  const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${segment[4].id}/products?limit=1`);
                  const products = await res.json();
                  if (products.length > 0) {
                    window.location.href = `/detpage/${products[0].id}`;
                  }
                } catch (e) {
                  alert('Erro ao buscar produto da categoria!');
                }
              }}/>
            <SimpleCard className="areablue04" image={segment[2].image} onClick={async () => {
                try {
                  const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${segment[4].id}/products?limit=1`);
                  const products = await res.json();
                  if (products.length > 0) {
                    window.location.href = `/detpage/${products[0].id}`;
                  }
                } catch (e) {
                  alert('Erro ao buscar produto da categoria!');
                }
              }}/>
            <SimpleCard className="areablue05" image={segment[2].image} onClick={async () => {
                try {
                  const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${segment[4].id}/products?limit=1`);
                  const products = await res.json();
                  if (products.length > 0) {
                    window.location.href = `/detpage/${products[0].id}`;
                  }
                } catch (e) {
                  alert('Erro ao buscar produto da categoria!');
                }
              }} />
          </div>
        </div>

        <div>
          <div className="ProdutsSegment">
            <SimpleCard
              className="areayellow01"
              title={segment[1].name}
              onClick={() =>
                (window.location.href = `/productsbycategory/${segment[1].id}`)
              }
            />
            <SimpleCard
              className="areared02"
              image={segment[2].image}
              onClick={async () => {
                try {
                  const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${segment[4].id}/products?limit=1`);
                  const products = await res.json();
                  if (products.length > 0) {
                    window.location.href = `/detpage/${products[0].id}`;
                  }
                } catch (e) {
                  alert('Erro ao buscar produto da categoria!');
                }
              }}
            />
            <SimpleCard className="areared03" image={segment[2].image} onClick={async () => {
                try {
                  const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${segment[4].id}/products?limit=1`);
                  const products = await res.json();
                  if (products.length > 0) {
                    window.location.href = `/detpage/${products[0].id}`;
                  }
                } catch (e) {
                  alert('Erro ao buscar produto da categoria!');
                }
              }}/>
            <SimpleCard className="areared04" image={segment[2].image} onClick={async () => {
                try {
                  const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${segment[4].id}/products?limit=1`);
                  const products = await res.json();
                  if (products.length > 0) {
                    window.location.href = `/detpage/${products[0].id}`;
                  }
                } catch (e) {
                  alert('Erro ao buscar produto da categoria!');
                }
              }}/>
            <SimpleCard className="simpleboard05" image={segment[2].image} onClick={async () => {
                try {
                  const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${segment[4].id}/products?limit=1`);
                  const products = await res.json();
                  if (products.length > 0) {
                    window.location.href = `/detpage/${products[0].id}`;
                  }
                } catch (e) {
                  alert('Erro ao buscar produto da categoria!');
                }
              }}/>
          </div>
        </div>
      </div>
      <div className="Breacker">
        <Breacker text="BestSellers" />
      </div>

      <ProductsList />
    </>
  );
}

export default ProductSegment;
