import React from "react";
import { Link } from "react-scroll";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../syles/homePage.css";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact from "../components/Contact";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveIn,
  MoveOut,
  ZoomIn,
} from "react-scroll-motion";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="social-icons">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/omer-cerkezi-8a5593131/">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/omercerkezi">
              <GitHubIcon />
            </a>
          </li>
          <li className="line-left"></li>
        </ul>
      </div>
      <div className="mainPage">
        <ScrollContainer>
          <Home />
          <ScrollPage page={0}>
            <Animator animation={batch(Fade(), ZoomIn(5, 1))}>
              <About />
            </Animator>
          </ScrollPage>
          <ScrollPage page={1}>
            <Animator animation={batch(MoveIn(1000, 0), MoveOut(1000, 0))}>
              <Skills />
            </Animator>
          </ScrollPage>
          <ScrollPage page={2}>
            <Animator animation={Fade()}>
              <Work />
            </Animator>
          </ScrollPage>
          <Contact />
        </ScrollContainer>
      </div>
      <div className="website-link">
        <ul>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              omercerkezi@gmail.com
            </Link>
          </li>
          <li className="line-right"></li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
