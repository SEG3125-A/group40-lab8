import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import MangaDisplay from "./MangaDisplay";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("popularity");
  const [mangas, setMangas] = useState([
    { id: 1, title: "Hunter x Hunter", cover: "/HxH.jpg" },
    { id: 2, title: "One Piece", cover: "/onePieceCover.jpg" },
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
    setCategory(event.target.value);
  };

  return (
    <div className="App">
      <SearchBar
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
        onSearchSubmit={handleSearchSubmit}
        searchTerm={searchTerm}
        category={category}
      />
      <MangaDisplay mangas={filteredMangas} />
    </div>
  );
};

export default App;
