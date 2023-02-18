import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import './Home.css'
import axios from "axios";

const Home = () => {
  const [games, setGames] = useState([]);

  const getGames = async () => {
    try {
      const response = await axios.get("http://localhost:3333/game");

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
    
    <div className="grid">
      
      {games.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        games.map((game) => (
          <div className="game" key={game.id}>
            <img src={game.coverImageUrl} alt="Imagem do Jogo" />
            <div className="games">
              <h2>{game.title}</h2>
              <p>{game.description}</p>
              <Link to={`/games/${game.id}`} className="btn-1">
                Ler mais
              </Link>
            </div>
            <div className="videos">
              <h2>Trailer:</h2>
              <ReactPlayer url={game.trailerYoutubeGamePlay} />
              <h2>Gameplay:</h2>
              <ReactPlayer url={game.gamePlayYoutubeUrl} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
