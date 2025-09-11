import React, { useState } from "react";
import Breacker from "../Compoments/Breacker";
import SimpleCard from "../Compoments/SimpleCard";
import "../Styles/SimpleCard.css";
import ProductsList from "../Compoments/ProductsList";

function Products() {
  return (
    <>
      <div className="ProdutsSegmentboard">
        <div>
          <div className="ProdutsSegment">
            <SimpleCard
              className="areared01"
              title="Ofertas Especiais"
              description="Confira os nossos novos produtos!"
            />
            <SimpleCard
              className="areared02"
              title="Ofertas Especiais"
              description="Confira os nossos novos produtos!"
            />
            <SimpleCard
              className="areared03"
              title="Wines"
              description="Confira os nossos novos produtos!"
            />
            <SimpleCard
              className="areared04"
              title="Beer"
              description="Confira os nossos novos produtos!"
            />
            <SimpleCard
              className="simpleboard05"
              title="Sales"
              description="Confira os nossos novos produtos!"
            />
          </div>
        </div>

        <div>
          <div className="ProdutsSegment">
            <SimpleCard
              className="areared01"
              title="Ofertas Especiais"
              description="Confira os nossos novos produtos!"
            />
            <SimpleCard
              className="areared02"
              title="Ofertas Especiais"
              description="Confira os nossos novos produtos!"
            />
            <SimpleCard
              className="areared03"
              title="Wines"
              description="Confira os nossos novos produtos!"
            />
            <SimpleCard
              className="areared04"
              title="Beer"
              description="Confira os nossos novos produtos!"
            />
            <SimpleCard
              className="simpleboard05"
              title="Sales"
              description="Confira os nossos novos produtos!"
            />
          </div>
        </div>

        <div>
          <div className="ProdutsSegment">
            <SimpleCard
              className="areared01"
              title="Ofertas Especiais"
              description="Confira os nossos novos produtos!"
            />
            <SimpleCard
              className="areared02"
              title="Ofertas Especiais"
              description="Confira os nossos novos produtos!"
            />
            <SimpleCard
              className="areared03"
              title="Wines"
              description="Confira os nossos novos produtos!"
            />
            <SimpleCard
              className="areared04"
              title="Beer"
              description="Confira os nossos novos produtos!"
            />
            <SimpleCard
              className="simpleboard05"
              title="Sales"
              description="Confira os nossos novos produtos!"
            />
          </div>
        </div>


        
      </div>
      <div className="Breacker">
        <Breacker text="BestSellers" />
      </div>
      
      <ProductsList 
      className="ProdutsSegment"  />
      </>
      );
      }

      export default Products;
