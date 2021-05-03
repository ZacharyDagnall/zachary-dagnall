import React from "react";
import Project from "./Project";
const projs = [
  {
    title: "Couchbound Traveler",
    video: "https://www.youtube.com/embed/pVBJk3yWS10",
    github: "https://github.com/ZacharyDagnall/couchbound-traveler",
    link: "",
    description:
      "A fun and educational web app to emulate world travel! Uses Rails for the backend and React for the frontend.",
  },
  {
    title: "GameBoyzArcade",
    video: "https://www.youtube.com/embed/6Nc8XF3UKhw",
    github: "https://github.com/ZacharyDagnall/GameBoyzArcade-frontend",
    link: "https://gameboyzarcade.netlify.app/",
    description:
      'A super fun site where you can choose to play one of 5 (6? 😉) games: Tic-Tac-Toe, Connect Four, Lights Out, and various versions of "6144". This was built using Rails on the backend and Javascript on the frontend.',
  },
  {
    title: "Cellar Seller",
    video: "https://www.youtube.com/embed/8Dqcck3MlCI",
    github: "https://github.com/ZacharyDagnall/cellar-seller-frontend",
    link: "",
    description:
      "Trying to sell some of those old collectibles that have been taking up space in the basement, but don't know if it's worth it? 😩 Or maybe you're a collector yourself, keeping an eye out for some item in particular? 👀 Cellar Seller can help!",
  },
  {
    title: "Hangman",
    video: "https://www.youtube.com/embed/T15NPBoWwBw",
    github: "https://github.com/ZacharyDagnall/hangman",
    link: "",
    description:
      "A Command-Line Interface app to play mathaon-style Hangman games (i.e. keep going until you get one wrong). Built using Ruby, SQLite, and TTY Prompt.",
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
