import React from "react";

import "./Thumb.css";
//import th_1 from "../../assets/th_1.jpg";
//import logo_1 from "../../assets/logo_1.png";

function ThumbCard({image, logo, title, nome}) {
  return (
    <section>
      <img className="thumb" src={image} alt="" />
      <div className="info-do-canal">
        <img className="logo-do-canal" src={logo} alt="" />
        <div className="text-canal">
          <h5>{title}</h5>
          <p>{nome}</p>
        </div>
      </div>
    </section>
  );
}

export default ThumbCard;

