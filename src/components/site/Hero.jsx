import React from "react";
import games from "../../data/games";

const Hero = () => {
  return (
    <section className="site-hero">
      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-headline">
            <span>PLAY.</span>
            <span> COMPETE.</span>
            <span> <span className="neon">ENJOY.</span></span>
          </h1>
          <p className="hero-sub">Discover arcade action, racing, survival, sports, and indie adventures.</p>

          <div style={{ marginTop: "1rem", display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
            <a href="#games" className="arcade-button">Browse the Arcade</a>
            <a href="https://rehdogggamesplus.itch.io" target="_blank" rel="noopener noreferrer" className="arcade-button outline">
              View on itch.io
            </a>
          </div>
        </div>

        <aside className="hero-right">
          <div className="stats-card">
            <div className="stat">
              <div className="stat-number">{games.length}</div>
              <div className="stat-label">Titles</div>
            </div>
            <div className="divider" />
            <div className="stat">
              <div className="stat-number">{Array.from(new Set(games.map(g => g.genre).filter(Boolean))).length}</div>
              <div className="stat-label">Genres</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
