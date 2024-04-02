import { useState } from "react";
import Navbar from "./component/Homepage/Navbar";
import "./App.css";
import Hero from "./component/Homepage/Hero";
import Home from "./component/Homepage/Home";
import About from "./component/Homepage/About";
import Needs from "./component/Homepage/Needs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {<Navbar />}
      {<Home/>}
      <About />
      <Needs />
    </>
  );
}

export default App;
