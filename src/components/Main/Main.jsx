import React from "react";
import ThumbCard from "../ThumbCard/ThumbCard";
import thumbDetails from "./thumbDetails";

function Main() {
  return (
    <main className="container">
      {thumbDetails.map(({ image, logo, title, nome, index }) => (
        <ThumbCard
          key={index}
          image={image}
          logo={logo}
          title={title}
          nome={nome}
        />
      ))}
    </main>
  );
}

export default Main;
