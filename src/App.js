import Genres from "./pages/Genres/Genres";
import Genre from "./pages/Genre/Genre";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Genres />} />
        <Route path="/genre/:id" element={<Genre />} />
        <Route path="/home" element={<Home />}/>
      </Routes>
    </>
  );
};

export default App;
