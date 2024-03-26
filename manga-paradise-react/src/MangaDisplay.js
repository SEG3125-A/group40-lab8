import React from "react";
import "./MangaDisplay.css";

const MangaDisplay = ({ mangas }) => {
  const renderStars = (rating) => {
    let stars = [];
    const Rating = Math.max(0, Math.min(5, rating));
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(Rating)) {
        stars.push(
          <span key={i} className="star filled">
            ★
          </span>
        );
      } else if (
        i > Math.floor(Rating) &&
        Rating % 1 > 0 &&
        i - Math.floor(Rating) === 1
      ) {
        stars.push(
          <span key={i} className="star half-filled">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="star">
            ☆
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="manga-display">
      {mangas.map((manga) => (
        <div key={manga.id} className="manga-item">
          <img src={manga.cover} className="img-fluid" alt={manga.title} />
          <h3>{manga.title}</h3>
          <div className="rating">{renderStars(manga.rating)}</div>
          <p className="author-name">{manga.author}</p>
          <p className="synopsis">{manga.synopsis}</p>
          <p className="publish-year">Published: {manga.year}</p>
        </div>
      ))}
    </div>
  );
};

export default MangaDisplay;
