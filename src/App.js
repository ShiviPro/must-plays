import { useState } from "react";
import "./App.css";
import mustPlayGames from "./data/gameData";

function App() {
  let gameGenres = Object.keys(mustPlayGames);

  for (let genreIndex = 0; genreIndex < gameGenres.length; genreIndex++) {
    while (gameGenres[genreIndex].includes("_")) {
      gameGenres[genreIndex] = gameGenres[genreIndex].replace("_", " ");
    }
  }

  let [userSelection, setUserSelection] = useState("None");
  let [isGenreSelected, setIsGenreSelected] = useState(false);

  const selectGenre = (event) => {
    setIsGenreSelected(true);
    userSelection = event.target.innerText;
    while (userSelection.includes(" ")) {
      userSelection = userSelection.replace(" ", "_");
    }
    setUserSelection(userSelection);
  };

  let gameGenreDivs = gameGenres.map((gameGenre, index) => (
    <div key={index} className="game-genre" onClick={selectGenre}>
      {gameGenre}
    </div>
  ));

  function Games(props) {
    if (isGenreSelected) {
      let genre = props.genre;
      let games = mustPlayGames[genre];
      let gameInfoDivs = games.map((game) => {
        let platforms = game.platforms;
        let platformDivs = platforms.map((platform, index) => (
          <span key={index} className="game-platform">
            {platform}
          </span>
        ));
        return (
          <div key="index" className="game-info">
            <h2 className="game-name">{game.name}</h2>
            <p className="game-platforms">{platformDivs}</p>
            <h3 className="game-release-date">
              Released on {game.originalReleaseDate}
            </h3>
            <h2>My Rating: {game.myRating}</h2>
            <p className="game-intro">{game.introduction}</p>
          </div>
        );
      });
      return gameInfoDivs;
    }
    return null;
  }

  return (
    <div className="App">
      <h1 className="brand-name">Must Plays</h1>
      <p className="hero-text">
        Check out my list of must play games/franchises. Select a genre to begin
        with -
      </p>
      <p className="genre-heading">Genres: </p>
      <div className="game-genres">{gameGenreDivs}</div>
      <p class="selected-genre">Selected: {userSelection}</p>
      <div className="games">
        <Games genre={userSelection} />
      </div>
    </div>
  );
}

export default App;
