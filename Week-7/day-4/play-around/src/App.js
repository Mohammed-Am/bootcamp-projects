import React from 'react';
import { Routes, Route, Link} from "react-router-dom";

const Home = () => (
  <div>
    <hr></hr>
    <h1>Home</h1>
    <img
      src="https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_1280.jpg"
      alt="Homepage"
      width="20%" />
  </div>
);

//new code
const About = ({ hobby }) => (
  <div>
    <hr></hr>
    <p>I love {hobby}</p>
    <img
      src="https://cdn.pixabay.com/photo/2014/04/03/10/26/turntable-310450_1280.png"
      alt="About"
      width="20%" />
  </div>
);


const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Me</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />

  
      <Route path="/about" element={<About hobby="music" />} />
    </Routes>
  </div>
);

export default App;