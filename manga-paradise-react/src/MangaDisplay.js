import React from "react";
import "./MangaDisplay.css";

const MangaDisplay = ({ mangas }) => {
  return (
    <div className="manga-display">
      {mangas.map((manga, index) => (
        <div key={index} className="manga-item">
          <img src={manga.cover} alt={manga.title} />
          <h3>{manga.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MangaDisplay;
