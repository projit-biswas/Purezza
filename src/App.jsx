import { useState } from "react";
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Navbar from "./component/Homepage/Navbar";
import "./App.css";
import Hero from "./component/Homepage/Hero";
import Home from "./component/Homepage/Home";
import About from "./component/Homepage/About";
import Needs from "./component/Homepage/Needs";
import OurClient from "./component/Homepage/OurClient";
import News from "./component/Homepage/News";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home/>
      <About />
      <Needs />
      <News/>
      <OurClient/>/
    </>
  );
}

export default App;
library.add(fab, fas, far)
