import React from "react";
import "../syles/home.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="home" className="home">
      <h1>Hi, my name is</h1>
      <h2>Omer Cerkezi</h2>
      <h3>I'm a Web Developer</h3>
      <p>
        Grounded and solution oriented computer engineer. Adept at motivating
        self and others. Always trying to improve my skills and adapt to the
        newer technologies.
      </p>
      <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>
        <button>
          Contact Me
          <span>
            <ArrowRightAltIcon />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Home;
