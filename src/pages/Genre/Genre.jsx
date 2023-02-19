import config from "../../config.json";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Genre.css";

const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [genre, setGenre] = useState({
    name: "",
  });

  useEffect(() => {
    if (id === "new") return;

    const fetchGenre = async () => {
      const { data } = await axios.get(`${config.apiUrl}/genre/${id}`);
      setGenre(data);
    };
    fetchGenre();
  }, []);

  const handleChange = (e) => {
    const genreClone = { ...genre };
    genreClone[e.target.name] = e.target.value;
    setGenre(genreClone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id === "new") {
        axios.post(`${config.apiUrl}/genre`, genre);
        return navigate("/");
      } else {
        axios.patch(config.apiUrl + "/genre" + '/' + id, genre);
        return navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post__wrapper">
      <div className="container">
        <form className="genre"></form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={genre.name}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="btn btn-primary">
          {id === "new" ? "Create" : "Update"}
        </button>
      </div>
    </div>
  );
};

export default Post;
