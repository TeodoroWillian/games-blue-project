import Genres from "./pages/Genres/Genres";
import Genre from "./pages/Genre/Genre";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Genres />} />
        <Route path="/genre/:id" element={<Genre />} />
      </Routes>
    </>
  );
};

export default App;
