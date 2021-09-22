import { useState } from "react";
import "./styles.css";

var animeDB = {
  Action: [
    { name: "Naruto", rating: "4/5" },
    { name: "Hunter x Hunter", rating: "4.5/5" },
    { name: "One Punch man", rating: "5/5" }
  ],
  Sport: [
    { name: "Haikyuu", rating: "5/5" },
    { name: "Kuroko's Basketball", rating: "3/5" },
    { name: "Captain Tsubasa", rating: "3.5/5" }
  ],
  Thriller: [
    { name: "Death Note", rating: "5/5" },
    { name: "Doctor stone", rating: "4/5" },
    { name: "Promised Neverland", rating: "4.5/5" }
  ]
};

var key = Object.keys(animeDB);

export default function App() {
  var [dispaly, setDisplay] = useState([]);
  function onClickHandler(genre) {
    dispaly = animeDB[genre];
    setDisplay(dispaly);
  }
  return (
    <div className="App">
      <h1>Best Anime</h1>
      <h2>Checkout my favorite anime. Select a genre to get started</h2>
      <div>
        {key.map((genre) => {
          return (
            <button key={genre} onClick={() => onClickHandler(genre)}>
              {" "}
              {genre}
            </button>
          );
        })}
      </div>
      <ul>
        {dispaly.map((item) => {
          return (
            <li key={item.name}>
              {item.name} - {item.rating}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
