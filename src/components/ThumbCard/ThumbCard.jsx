import React from "react";

import "./Thumb.css";

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

