import React, { useMemo, useState } from "react";
import games from "../../data/games";

const Badge = ({ children, style }) => (
  <span style={{ display: "inline-block", padding: "2px 8px", borderRadius: 999, fontSize: ".8rem", ...style }}>{children}</span>
);

const Featured = () => {
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    const genres = games.map((g) => g.genre).filter(Boolean);
    return ["All", ...Array.from(new Set(genres))];
  }, []);

  const filtered = useMemo(() => {
    // Exclude games explicitly marked as not featured
    const candidate = games.filter((g) => g.featured !== false);
    if (category === "All") return candidate;
    return candidate.filter((g) => g.genre && g.genre.toLowerCase() === category.toLowerCase());
  }, [category]);

  return (
    <section id="games" className="site-content" style={{ paddingTop: 12 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", marginBottom: "1rem" }}>
        <h2 style={{ margin: 0, color: "var(--accent)" }}>Featured Games</h2>
        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`kofi-button ${category === cat ? 'active' : ''}`}
              style={{ padding: ".4rem .7rem", borderRadius: 6, fontWeight: 700, background: category === cat ? 'var(--accent)' : 'transparent', color: category === cat ? 'var(--bg)' : 'var(--accent)' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="featured-grid">
        {filtered.map((g) => (
          <div key={g.id} className="featured-card">
            <div className="thumb" style={{ backgroundImage: `url(${g.thumbnail})` }} />
            <div style={{ padding: "0.75rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: ".5rem", marginBottom: ".5rem" }}>
                <h3 style={{ margin: 0, fontSize: "1.05rem", color: "var(--text)" }}>{g.title}</h3>
                <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
                  <Badge style={{ border: `1px solid rgba(255,255,255,0.04)`, color: "var(--accent)" }}>{g.genre}</Badge>
                  <Badge style={{ background: "rgba(255,255,255,0.06)", color: "var(--text)" }}>{g.price}</Badge>
                </div>
              </div>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: ".95rem" }}>{g.description}</p>
              <div style={{ marginTop: ".75rem" }}>
                <a className="arcade-button" href={g.url} target="_blank" rel="noopener noreferrer">Play</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
