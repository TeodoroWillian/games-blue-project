import { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import config from "../../config.json";

const Home = () => {
  const [games, setGames] = useState([]);

  const getGames = async () => {
    try {
      const response = await axios.get(`${config.apiUrl}/game`);

      const data = response.data;

      setGames(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {games.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        games.map((game) => (
          <div className="col" key={game.id}>
            <div className="card h-100">
              <img
                src={game.coverImageUrl}
                className="card-img-top"
                alt="Imagem capa do jogo"
                width="256"
                height="256"
              />
              <div className="card-body">
                <h5 className="card-title">{game.title}</h5>
                <p className="card-text">{game.description}.</p>
              </div>

              <div className="card-footer">
                <p>Ano de Lançamento: {game.year}</p>
                <p>ImdbScore: {game.imdbScore}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  {" "}
                  <a href={game.trailerYoutubeGamePlay}>Trailer</a>
                </small>
                <br />
                <small className="text-muted">
                  {" "}
                  <a href={game.gamePlayYoutubeUrl}>Gameplay</a>
                </small>
              </div>
              
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
