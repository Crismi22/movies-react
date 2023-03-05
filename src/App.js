import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import Footer from "./components/Footer";
import Populares from "./pages/movies/Populares";
import Mejores from "./pages/movies/Mejores";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/populares" element={<Populares />} />
          <Route path="/mejores" element={<Mejores />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
