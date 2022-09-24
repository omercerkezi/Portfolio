import React from "react";
import "../syles/work.css";
import BuckiLogo from "../assets/images/bucki.png";
import CalculatorLogo from "../assets/images/calculator.png";
import CryptoLogo from "../assets/images/crypto.png";
import NotesLogo from "../assets/images/notes.png";
import TenziesLogo from "../assets/images/tenzies.png";
import WeatherLogo from "../assets/images/weather.png";

const Work = () => {
  const myWork = [
    {
      name: "Bucki",
      logo: BuckiLogo,
      code: "https://github.com/omercerkezi/Ecommerce-App",
    },
    {
      name: "Weather App",
      logo: WeatherLogo,
      code: "https://github.com/omercerkezi/Weather-App",
    },
    {
      name: "Calculator",
      logo: CalculatorLogo,
      code: "https://github.com/omercerkezi/calculator",
    },
    {
      name: "Crypto Tracker",
      logo: CryptoLogo,
      code: "https://github.com/omercerkezi/crypto-tracker",
    },
    {
      name: "Note App",
      logo: NotesLogo,
      code: "https://github.com/omercerkezi/Notebook-App",
    },
    {
      name: "Tenzies",
      logo: TenziesLogo,
      code: "https://github.com/omercerkezi/tenzies",
    },
  ];
  return (
    <div id="work" className="work">
      <h1>Work</h1>
      <p>Check out some of my recent work</p>
      <div className="work-body">
        {myWork.map((work) => (
          <div className="card">
            <img src={work.logo} alt="workImage" />
            <div className="hoverCard">
              <span>{work.name}</span>
              <div className="hoverCard-Buttons">
                <a href={work.code}>
                  <button>Demo</button>
                </a>
                <a href={work.code}>
                  <button>Code</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
