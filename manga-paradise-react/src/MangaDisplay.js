import React from "react";
import "./MangaDisplay.css";

const MangaDisplay = ({ mangas }) => {
  return (
    <div className="manga-display row">
      {mangas.map((manga, index) => (
        <div key={index} className="manga-item col-sm-6 col-lg-4 mb-4">
          <img src={manga.cover} className="img-fluid" alt={manga.title} />
          <h3>{manga.title}</h3>
          <p className="publish-year">Published: {manga.year}</p>
        </div>
      ))}
    </div>
  );
};

export default MangaDisplay;
