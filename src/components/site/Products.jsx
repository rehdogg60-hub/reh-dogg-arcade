import React from "react";
import products from "../../data/products";

const Products = () => {
  return (
    <section id="merch" className="site-content merch-section">
      <div className="section-heading-row">
        <div>
          <h2>Reh Dogg Arcade Merch</h2>
          <p>Shop arcade-inspired gear from the official Printify store.</p>
        </div>
        <a
          className="arcade-button outline"
          href="https://reh-dogg-arcade.printify.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Full Shop
        </a>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <a href={product.url} target="_blank" rel="noopener noreferrer" className="product-image-link">
              <img src={product.image} alt={product.title} loading="lazy" />
            </a>
            <div className="product-card-body">
              <h3>{product.title}</h3>
              <div className="product-card-footer">
                <span>{product.price}</span>
                <a className="arcade-button" href={product.url} target="_blank" rel="noopener noreferrer">
                  Shop
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Products;
