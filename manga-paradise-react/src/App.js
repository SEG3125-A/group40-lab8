import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import MangaDisplay from "./MangaDisplay";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("popularity");
  const [mangas, setMangas] = useState([
    { id: 1, title: "Hunter x Hunter", cover: "/HxH.jpg", year: 2003 },
    { id: 2, title: "One Piece", cover: "/onePieceCover.jpg", year: 1997 },
    { id: 2, title: "Bleach", cover: "/bleach.jpeg", year: 2000 },
    { id: 1, title: "Dragon ball", cover: "/Dragon Ball.jpeg", year: 1990 },
  ]);
  const [filteredMangas, setFilteredMangas] = useState(mangas);

  useEffect(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = mangas.filter((manga) =>
      manga.title.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredMangas(filtered);
  }, [searchTerm, mangas]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {};

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory(value);

    if (value === "publish_date") {
      // Sort by publish date
      setFilteredMangas([...mangas].sort((a, b) => b.year - a.year));
    } else if (value === "genre") {
      setFilteredMangas(
        [...mangas].sort((a, b) => b.popularity - a.popularity)
      );
    }
  };

  return (
    <div className="App">
      <header className="text-center bg-dark text-white py-3">
        <h1>MANGA PARADISE</h1>
      </header>
      <div className="container mt-4">
        <SearchBar
          onSearchChange={handleSearchChange}
          onCategoryChange={handleCategoryChange}
          onSearchSubmit={handleSearchSubmit}
          searchTerm={searchTerm}
          category={category}
        />
        <MangaDisplay mangas={filteredMangas} />
      </div>
    </div>
  );
};

export default App;
