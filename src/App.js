import { useState } from "react";
import "./App.css";
import mustPlayGames from "./data/gameData";

const App = () => {
  const gameGenres = Object.keys(mustPlayGames);

  for (let genreIndex = 0; genreIndex < gameGenres.length; genreIndex++)
    while (gameGenres[genreIndex].includes("_"))
      gameGenres[genreIndex] = gameGenres[genreIndex].replace("_", " ");

  const [userSelection, setUserSelection] = useState("None");
  const [isGenreSelected, setIsGenreSelected] = useState(false);

  const selectGenre = event => {
    setIsGenreSelected(true);
    let currUserSelection = event.target.innerText;
    while (currUserSelection.includes(" ")) 
      currUserSelection = currUserSelection.replace(" ", "_");
    setUserSelection(currUserSelection);
  };

  const gameGenreDivs = gameGenres.map((gameGenre, index) => 
    <div key={index} className="game-genre" onClick={selectGenre}>
      {gameGenre}
    </div>
  );

  const Games = props => {
    if (!isGenreSelected) return null;
    const genre = props.genre;
    const games = mustPlayGames[genre];
    const gameInfoDivs = games.map(game => {
      const platforms = game.platforms;
      const platformDivs = platforms.map((platform, index) =>
        <span key={index} className="game-platform">
          {platform}
        </span>
      );
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
