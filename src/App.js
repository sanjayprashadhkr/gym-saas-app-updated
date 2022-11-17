import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { Contact } from "./components/Contact";
import { useState, createContext, useContext } from "react";
export const Appcontext = createContext(null);

function App() {
  const [cart, addItemToCart] = useState([]);
  return (
    <Appcontext.Provider value={{ cart, addItemToCart }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </Appcontext.Provider>
  );
}

export default App;
