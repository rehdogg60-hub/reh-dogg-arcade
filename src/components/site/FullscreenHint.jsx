import React, { useEffect, useState } from "react";

const HINT_KEY = "rehdogg.hideFullscreenHint";

const FullscreenHint = () => {
  const [visible, setVisible] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    let fadeTimer;
    let removeTimer;
    const hidden = (() => {
      try {
        return !!localStorage.getItem(HINT_KEY);
      } catch (e) {
        return false;
      }
    })();

    if (hidden) return undefined;

    // show immediately
    setVisible(true);

    // start fade out after 4.5s, remove after 5s
    fadeTimer = setTimeout(() => setFadingOut(true), 4500);
    removeTimer = setTimeout(() => setVisible(false), 5000);

    const onKey = (e) => {
      const active = document.activeElement;
      const inForm = active && (['INPUT', 'TEXTAREA', 'SELECT'].includes(active.tagName) || active.isContentEditable);
      if (inForm) return;
      if (e.key === 'f' || e.key === 'F') {
        try { localStorage.setItem(HINT_KEY, '1'); } catch (err) {}
        setFadingOut(true);
        setTimeout(() => setVisible(false), 300);
      }
    };

    window.addEventListener('keydown', onKey);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`fullscreen-hint ${fadingOut ? 'hide' : 'show'}`} aria-hidden>
      Press F for Fullscreen
    </div>
  );
};

export default FullscreenHint;
