import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
<<<<<<< HEAD
import  Home  from "./components/Home";
=======
import { Home } from "./pages/Home";
>>>>>>> ef3f8e1445cda24b35b2294a7aa885dece557868
import Footer from "./components/Footer";
import Populares from "./pages/movies/Populares";
import Mejores from "./pages/movies/Mejores";
// import Error404 from "./pages/movies/Error404";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/populares" element={<Populares />} />
          <Route path="/mejores" element={<Mejores />} />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
