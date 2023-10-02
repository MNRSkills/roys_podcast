import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/navbar";
import About from "./Components/about";
import Home from "./Components/home";
import ListenUp from "./Components/listen";

function App() {
  const [count, setCount] = useState(0);
  const [nav, setNav] = useState(false);
  const navToggle = () => {
    setNav(!nav);
    console.log("clicked");
  };

  return (
    <div className="App container">
      <Navbar toggle={navToggle} nav={nav} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/listen" element={<ListenUp />} />
      </Routes>
      {/* we will need a navbar
      a page that displays what the podcast is about 
      a page that will hold the shows we have produced
      a page that have comments 
      Possibly any other listing */}
    </div>
  );
}

export default App;
