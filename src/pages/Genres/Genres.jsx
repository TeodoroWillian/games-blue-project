import config from "../../config.json";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Genres.css";
import { useNavigate } from "react-router-dom";

const Genres = () => {
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const { data } = await axios.get(`${config.apiUrl}/genre`);
      setGenres(data);
    };
    fetchGenres();
  }, []);

  const handleDelete = async (genre) => {
    try {
      setGenres(genres.filter((g) => g.id !== genre.id));

      await axios.delete(`${config.apiUrl}/genre/${genre.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="posts">
      <div className="container">
        <button
          onClick={() => navigate("/genre/new")}
          className="btn btn-primary mb-4"
        >
          New Genre
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {genres.map((genre) => (
              <tr key={genre.id}>
                <td>{genre.name}</td>
                <td>
                  <button
                    onClick={() => navigate(`/genre/${genre.id}`)}
                    className="btn btn-primary"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(genre)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Genres;
