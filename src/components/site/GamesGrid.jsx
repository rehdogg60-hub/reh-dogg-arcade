import React from "react";
import games from "../../data/games";

const GamesGrid = () => {
  return (
    <section style={{ padding: "1rem" }}>
      <h2>Games</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
        {games.map((game) => (
          <article key={game.id} style={{ border: "1px solid #e6e6e6", padding: "1rem", borderRadius: 6 }}>
            <h3 style={{ margin: "0 0 .5rem 0" }}>{game.title}</h3>
            {game.description && <p style={{ margin: "0 0 .5rem 0" }}>{game.description}</p>}
            <p style={{ margin: "0 0 .5rem 0", fontSize: ".9rem", color: "#555" }}>
              <strong>Genre:</strong> {game.genre} — <strong>Price:</strong> {game.price}
            </p>
            <a
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", padding: ".5rem 1rem", background: "#007bff", color: "#fff", borderRadius: 4, textDecoration: "none" }}
            >
              Play
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GamesGrid;
