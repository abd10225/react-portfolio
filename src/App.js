import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./common/NavBar";
import AboutMe from "./screens/AboutMe";
import Contact from "./screens/Contact";
import Exp from "./screens/Exp";
import Home from "./screens/Home";
import Skills from "./screens/Skills";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/exp" element={<Exp />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
