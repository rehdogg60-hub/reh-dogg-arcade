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
        {products.map((product) => {
          const image = <img src={product.image} alt={product.title} loading="lazy" />;

          return (
            <article className="product-card" key={product.id}>
              {product.url ? (
                <a href={product.url} target="_blank" rel="noopener noreferrer" className="product-image-link">
                  {image}
                </a>
              ) : (
                <div className="product-image-link product-image-static">{image}</div>
              )}
              <div className="product-card-body">
                <h3>{product.title}</h3>
                <div className="product-card-footer">
                  <span>{product.price}</span>
                  {product.url ? (
                    <a className="arcade-button" href={product.url} target="_blank" rel="noopener noreferrer">
                      Shop
                    </a>
                  ) : (
                    <span className="coming-soon-button">Soon</span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
