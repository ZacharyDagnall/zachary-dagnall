import React from "react";
import Project from "./Project";
const projs = [
  {
    title: "Couchbound Traveler",
    video: "https://www.youtube.com/embed/pVBJk3yWS10",
    github: "https://github.com/ZacharyDagnall/couchbound-traveler",
    link: "",
  },
  {
    title: "GameBoyzArcade",
    video: "https://www.youtube.com/embed/6Nc8XF3UKhw",
    github: "https://github.com/ZacharyDagnall/GameBoyzArcade-frontend",
    link: "https://gameboyzarcade.netlify.app/",
  },
  {
    title: "Cellar Seller",
    video: "https://www.youtube.com/embed/8Dqcck3MlCI",
    github: "https://github.com/ZacharyDagnall/cellar-seller-frontend",
    link: "",
  },
  {
    title: "Hangman",
    video: "https://www.youtube.com/embed/T15NPBoWwBw",
    github: "https://github.com/ZacharyDagnall/hangman",
    link: "",
  },
];

function Projects() {
  return (
    <div id="projects-section" className="section">
      <h4>Projects</h4>
      {projs.map((p, i) => (
        <Project key={i} project={p} />
      ))}
    </div>
  );
}

export default Projects;
