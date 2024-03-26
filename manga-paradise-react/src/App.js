import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import MangaDisplay from "./MangaDisplay";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("popularity");
  const [mangas, setMangas] = useState([
    {
      id: 1,
      title: "Hunter x Hunter",
      cover: "/HxH.jpg",
      year: 1998,
      author: "Yoshihiro Togashi",
      synopsis: "Synopsis: A young boy's quest to become a legendary hunter.",
      rating: 4.5,
    },
    {
      id: 2,
      title: "One Piece",
      cover: "/onePieceCover.jpg",
      year: 1997,
      author: "Eiichiro Oda",
      synopsis:
        "Synopsis: A rubbery pirate's adventure for the ultimate treasure.",
      rating: 4.8,
    },
    {
      id: 3,
      title: "Bleach",
      cover: "/bleach.jpeg",
      year: 2001,
      author: "Tite Kubo",
      synopsis:
        "Synopsis: A teenager who can see ghosts becomes a Soul Reaper.",
      rating: 4.3,
    },
    {
      id: 4,
      title: "Dragon Ball",
      cover: "/Dragon Ball.jpeg",
      year: 1984,
      author: "Akira Toriyama",
      synopsis:
        "Synopsis: A martial artist's quest to gather the Dragon Balls.",
      rating: 4.7,
    },
    {
      id: 5,
      title: "Demon Slayer",
      cover: "/demonSlayer.jpeg",
      year: 2016,
      author: "Koyoharu Gotōge",
      synopsis: "Synopsis: A boy's vow to turn his sister back into a human.",
      rating: 4.9,
    },
    {
      id: 6,
      title: "Death Note",
      cover: "/deathNote.jpg",
      year: 2003,
      author: "Tsugumi Ohba",
      synopsis:
        "Synopsis: A high school student discovers a notebook with deadly powers.",
      rating: 5.0,
    },
    {
      id: 7,
      title: "Attack on Titan",
      cover: "/aot.jpg",
      year: 2009,
      author: "Hajime Isayama",
      synopsis: "Synopsis: Humans fight for survival against towering titans.",
      rating: 4.6,
    },
    {
      id: 8,
      title: "Monster",
      cover: "/monster.jpeg",
      year: 1994,
      author: "Naoki Urasawa",
      synopsis:
        "Synopsis: A doctor's search for redemption leads him to a nefarious discovery.",
      rating: 4.7,
    },
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
