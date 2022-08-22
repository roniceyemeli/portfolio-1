import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projet from "./Components/Projet/Projet";
import Acceuil from "./Components/Acceuil/Acceuil";
import Service from "./Components/Service/Service";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/portfolio" element={<Acceuil />}></Route>
          <Route exact path="/" element={<Acceuil />}></Route>
          <Route exact path="/Projet" element={<Projet />}></Route>
          <Route exact path="/Service" element={<Service />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
