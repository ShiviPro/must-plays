import "./App.css";
import mustPlayGames from "./data/gameData";

function App() {
  let gameGenres = Object.keys(mustPlayGames);

  for (let genreIndex = 0; genreIndex < gameGenres.length; genreIndex++) {
    while (gameGenres[genreIndex].includes("_")) {
      gameGenres[genreIndex] = gameGenres[genreIndex].replace("_", " ");
    }
  }

  let gameGenreDivs = gameGenres.map((gameGenre, index) => (
    <div key={index} className="game-genre">
      {gameGenre}
    </div>
  ));

  return (
    <div className="App">
      <h1 className="brand-name">Must Plays</h1>
      <p className="hero-text">
        Check out my list of must play games/franchises. Select a genre to begin
        with -
      </p>
      <p className="genre-heading">Genres: </p>
      <div className="game-genres">{gameGenreDivs}</div>
    </div>
  );
}

export default App;
