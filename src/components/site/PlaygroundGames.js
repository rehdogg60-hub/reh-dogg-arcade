import React from "react";
import "./PlaygroundGames.css";

const games = [
  {
    title: "Last Train",
    url: "https://playground.google/g/9dGoL8",
    image: "https://lh3.googleusercontent.com/playground/AK5No5nyq2JmgE7_Q8bLEuAdin9FuXOKLWOHXvUVUueKuKSpVCDbspyB9vC9LT3WFlbWHpQUep0ChFRa0iTYSu5p_9GrNkuPRMGDnQXsGOTW_a8CxASOUfyRHsDR1_qt4A_qh07AyEW7IrRqM2MzQ4UzEdVnRspBlfO5tfagL5csC0gU2KtJ80xC2emz20pja5UTyYgt3HJL0-tA0ncu7yIZ3rzPO75iXjvgrL9rgQYq=w1280-rw-lo-nu",
  },
  {
    title: "Reh Dogg Arcade: Island Outlaw 3D",
    url: "https://playground.google/g/IH1AXg",
    image: "https://lh3.googleusercontent.com/playground/AK5No5lRjPK9VFr7AfF79oXxqb_HkXYn15tlTf0k0NE1hnyo1a8mzEkFonKhZM33QQknGSHvxbTeR13wB6zOk6KXE4Ob5t6pi-DH7szH8jkiq6Y-Qj7s1hWI9qITMsvyeLTtHPo4lCGD56KTJSjcKF15-5zg_mweQHyVfWiKqR7cQoP6-XqYdMrkQVpAHF0WfY8YBjvTwx1P8wJ8LtuN6BN55QK6n_3-EXh6leEsTNy7=w1280-rw-lo-nu",
  },
  {
    title: "Gowling",
    url: "https://playground.google/g/NFLqiN",
    image: "https://lh3.googleusercontent.com/playground/AK5No5mDX3eJ6GPKB-E9EMCf-A7IH-nxhbubDpk8SMNq4llufCrLNC6VVtvxCNF_QTjRZK79m3uVl-SKUbWKB1HAdqxVEeZage4tiTET5v_jbyvXK0SmgnUYk5YgeV7WHQvzc6iXx90Q2LpYcy5zOwa-Cp7ebpU_5FGSL9AhfyapfE8RQMi05fZfxbVk0Nz_LFeV7P-3jxCwfbjeBcNmshdfNskAjiBwZchZgHMrIsho=w1280-rw-lo-nu",
  },
  {
    title: "Glider Grove",
    url: "https://playground.google/g/x81rhz",
    image: "https://lh3.googleusercontent.com/playground/AK5No5nyTXnZ1ZosgPBAXThfhLiT8a8r6mLyauXsUvhm5vLQfa8H8tWMOWqEQbd9c3BiNboFMJOwVBAlYydV_1ZJPN8UMmCf4pDbq-d-Sv89FnMr9DtPxc1r-BRgOLHY-G6ozYLOdDijD0y_rG7ARFxzeh4QVpKMKL2wMNRg4kP3S_tf1Y3XmLxoUprLf23gK9Vs6gMNj1uCEEhKl64LxHRlZwlQeuLtCpSBVikqooY=w1280-rw-lo-nu",
  },
  {
    title: "Skyline Escape",
    url: "https://playground.google/g/cHPhlb",
    image: "https://lh3.googleusercontent.com/playground/AK5No5nfcVX5I3UpLXXsyY5hDMiiGoA1mb8XAQwTkr_jKkKJsAIjKUFVq0SwvqdYSGWrFo8RdRaZ_VxCtWxPZaVh-nQojOCqEYByJ7IRqOAcBTVs07HKPkTcXS8HC1876rKh-DMRfcIcCGxNyytsjq7AV-cT2VwJHmA8bONxLZw7WnyEOQGClQkCCMFJdhwfhIXojHzMsf-HlGS-rUZU3fVOYuzK-uNj_tbrKEhOJy5T=w1280-rw-lo-nu",
  },
  {
    title: "Reh Dogg Arcade: Storm Rider",
    url: "https://playground.google/g/X1jqSQ",
    image: "https://lh3.googleusercontent.com/playground/AK5No5lgpKbWd4i-JVFb-st0SFwi0JJtFQ4D8CcEPKwUW8QTs-hObCl-QTRMTBeI06NIqr4nXHGfuCKFJzmzRm7Qye6bncckqYhxTr2I0XBf-bnwXie01kVdf5R5of9tQ9Xs4izAahcPyyK2jqZfpIJ-8s0huCXizXBwbgWaE3DeAbieNTOBxjRPyKYjehhBbNRzjX5QxAi2jGJjlfhZmipeQZEZoU4KOIYJVcfNSDg=w1280-rw-lo-nu",
  },
  {
    title: "Yuletide Brawl by Sleighbell Arcade",
    url: "https://playground.google/g/8Mkqo2",
    image: "https://lh3.googleusercontent.com/playground/AK5No5kvrLPz0DEpUWO7Cm6InZesCF3hh3w0N8tspMp-IuCsyK8r_ZabGzHx7D4qZi2n9iiEbNP-FzmQc8nEXzrL_BVoW0uKI4_5JXoOhiQ7d7rtSmf6fx9PkxVygwAxSj64qXy2dUzhNO4b1fgr7sviFrJz0JE6PGEZHJt_SGloawc4FqfXztd-g084Ue-A7dEU-prl6CpvxKTYyUq-sZycWSF9OfDO-nyx8X4LuHxU=w1280-rw-lo-nu",
  },
  {
    title: "Gobble Gallery",
    url: "https://playground.google/g/yMmTTf",
    image: "https://lh3.googleusercontent.com/playground/AK5No5kZgcxEQq1kRww_KVLVG0rw-7OmxczNOCYtubOAlualkKIh0Ru-roS-j-_VKSICZP6Womp6WABZkFHX11pz-pVidh28YcIGjJJb_rPx74wZZckYBYh7r7Y789ffSFyDj_pwFqOQONPWMYuE6HyGvZYYKguYUbMJFmU0Ax9obpldYZWrMYbRTCK4D8l5hn7w7nnrRlWJeHyJVk760WlYzK8owi0EfWRrbPPVtDk=w1280-rw-lo-nu",
  },
  {
    title: "Sleighbell Arcade: Yuletide Clash",
    url: "https://playground.google/g/dibxnf",
    image: "https://lh3.googleusercontent.com/playground/AK5No5nKrXZV9KkplgUvHJ85Hs6c9dLwxBlm4z750jMJQzj5-gaAR370SI_XJljdYer15pMjvijswEPaOUXsiVEruPoOCp01ZOYIY4LiZyul3LhaAqYFOCb-LthWMJi1rnd-yK1VGM7xbMr2s-otfmcevn-v82XIrQnLBjAITTpFWMCmFtKO55NEph3Q7ct9-8hDAvlgPM6wb-xbv8AUSTrcAYtyOWXabGEWZ39hXQ4=w1280-rw-lo-nu",
  },
  {
    title: "Swarm Banners",
    url: "https://playground.google/g/4Bd9LV",
    image: "https://lh3.googleusercontent.com/playground/AK5No5lWpp7RTwO7WD45qT3XmtnK7x9p4J3eqShhVvt2Hw8xmb12qEq629SuVpz57jzHmYQquJDpWZKWOTE5UEenX_xB7Np38emBMETXElF6tuOBNVrqO067oAUsNLR0BAJhQ9QdLR17x0l7oj4fAB7i3hmwJpNsxsL3HBK2T3rOVobA1VNbfjKxyA3NV8aCHG9QAy2UTWu7Ne-Gx_YHdRbyfUz7kKiWLyNT0-gVzQ0P=w1280-rw-lo-nu",
  },
];

export default function PlaygroundGames() {
  return (
    <section id="playground" className="playground-games" aria-labelledby="playground-title">
      <header className="playground-games__banner">
        <h2 id="playground-title">Free Google Playground Games</h2>
        <p>Pick a game and play for free on Google Playground.</p>
      </header>
      <ul className="playground-games__grid">
        {games.map(({ title, url, image }) => (
          <li key={url}>
            <a href={url} aria-label={`Play ${title} for free on Google Playground`}>
              <img src={image} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
              <span className="playground-games__title">{title}</span>
              <span className="playground-games__play">Play Free</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
