import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import Footer from "./components/Footer";
import Populares from "./pages/movies/Populares";
import Mejores from "./pages/movies/Mejores";
import MovieDetails from "./pages/movies/MovieDetails";
import Error404 from "./pages/movies/Error404";

function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/populares" element={<Populares />} />
          <Route path="/mejores" element={<Mejores />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<Error404 />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;