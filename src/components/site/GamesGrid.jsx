import React from "react";
import games from "../../data/games";

const GamesGrid = () => {
  return (
    <section className="site-content">
      <h2 style={{ color: "var(--accent)", margin: "0 0 1rem 0" }}>Games</h2>
      <div className="games-grid">
        {games.map((game) => (
          <article key={game.id} className="game-card">
            <h3>{game.title}</h3>
            {game.description && <p>{game.description}</p>}
            <p>
              <strong>Genre:</strong> {game.genre} — <strong>Price:</strong> {game.price}
            </p>
            <a className="arcade-button" href={game.url} target="_blank" rel="noopener noreferrer">
              Play
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GamesGrid;
