import React from "react";
import "../syles/skills.css";
import htmlLogo from "../assets/images/html.png";
import cssLogo from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import node from "../assets/images/node.png";
import python from "../assets/images/python.png";
import csharp from "../assets/images/csharp.png";
import cplusplus from "../assets/images/cplusplus.png";

const Skills = () => {
  const mySkills = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "Javascript", logo: javascript },
    { name: "React", logo: react },
    { name: "Node", logo: node },
    { name: "Python", logo: python },
    { name: "C#", logo: csharp },
    { name: "C++", logo: cplusplus },
  ];
  return (
    <div id="skills" className="skills">
      <h1>Skills</h1>
      <p>These are the technologies I've worked with</p>
      <div className="skills-body">
        {mySkills.map((skill) => (
          <div className="technology">
            <div className="test">
              <img src={skill.logo} alt="logo" />
              <p>{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
