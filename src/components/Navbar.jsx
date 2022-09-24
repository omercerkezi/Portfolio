import React, { useState } from "react";
import { Link } from "react-scroll";
import "../syles/navbar.css";
import Logo from "../assets/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [burgerClass, setBurgerClass] = useState("nav-hamburgerUnclicked");
  const [isMenuClickled, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    !isMenuClickled
      ? setBurgerClass("nav-hamburgerClicked")
      : setBurgerClass("nav-hamburgerUnclicked");

    setIsMenuClicked((prev) => !prev);
    console.log(burgerClass);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link
          to="homePage"
          className="site-title"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <img className="logo" src={Logo} alt="" />
        </Link>
      </div>
      <div className="nav-links">
        <ul>
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
            Home
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Skills
          </Link>
          <Link to="work" spy={true} smooth={true} offset={-80} duration={500}>
            Work
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Contact
          </Link>
        </ul>
      </div>
      <div className="nav-menuBtn" onClick={updateMenu}>
        <MenuIcon />
      </div>
      <div className={burgerClass}>
        <div className="burger-blur" onClick={updateMenu}></div>
        <div className="burger-exitBtn">
          <CloseIcon sx={{ fontSize: 33 }} onClick={updateMenu} />
        </div>
        <div className="burger-links">
          <ul>
            <Link
              to="home"
              onClick={updateMenu}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </Link>
            <Link
              to="about"
              onClick={updateMenu}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              About
            </Link>
            <Link
              to="skills"
              onClick={updateMenu}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Skills
            </Link>
            <Link
              to="work"
              onClick={updateMenu}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Work
            </Link>
            <Link
              to="contact"
              onClick={updateMenu}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
