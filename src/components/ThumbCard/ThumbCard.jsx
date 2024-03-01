import React from "react";

import "./Thumb.css";

import th_1 from "../../assets/th_1.jpg";
import logo_1 from "../../assets/logo_1.png";

function ThumbCard() {
  return (
    <section>
      <img className="thumb" src={th_1} alt="" />
      <div className="info-do-canal">
        <img className="logo-do-canal" src={logo_1} alt="" />
        <div className="text-canal">
          <h5>Aprendendo a programar com a Rocketseat</h5>
          <p>Rocktseat</p>
        </div>
      </div>
    </section>
  );
}

export default ThumbCard;
