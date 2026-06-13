import React from 'react';

const ITEMS = [
  '★ STAR DUEL 3D',
  '★ NEON RUN',
  '★ SUDS OF FURY',
  '★ DEEP DIG',
  '★ BOOKING EMPIRE',
  '★ STREET JUSTICE',
  '★ BLOCK WARS',
  '★ BARK STARS',
];

const Marquee = () => {
  // duplicate items to create seamless loop
  const content = [...ITEMS, ...ITEMS];

  return (
    <div className="arcade-marquee" aria-hidden>
      <div className="marquee-track">
        {content.map((t, i) => (
          <div key={i} className="marquee-item">{t}</div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
