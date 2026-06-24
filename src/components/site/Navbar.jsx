import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    const onKey = (e) => {
      // ignore typing inside form controls or content editable
      const active = document.activeElement;
      const inForm = active && (['INPUT', 'TEXTAREA', 'SELECT'].includes(active.tagName) || active.isContentEditable);
      if (inForm) return;

      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      }

      if (e.key === 'Escape' || e.key === 'Esc') {
        if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
      }
    };

    document.addEventListener("fullscreenchange", onChange);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("fullscreenchange", onChange);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (e) {
      // ignore failures
    }
  };

  return (
    <nav className="site-navbar">
      <h2>Reh Dogg Games Plus Arcade</h2>
      <div style={{ display: "flex", gap: ".75rem", alignItems: "center" }}>
        <nav style={{ display: "flex", gap: ".5rem" }} aria-label="Main">
          <a className="kofi-button" href="#games">Games</a>
          <a className="kofi-button" href="#merch">Merch</a>
          <a className="kofi-button" href="#about">About</a>
          <a className="kofi-button" href="#contact">Contact</a>
        </nav>
        <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
          <button className="kofi-button" onClick={toggleFullscreen} aria-pressed={isFullscreen}>
            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          </button>
          <a
            className="kofi-button"
            href="https://ko-fi.com/rehdogg/shop"
            target="_blank"
            rel="noopener noreferrer"
          >
            Support
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
