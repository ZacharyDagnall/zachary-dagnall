import React, { useState, useEffect } from "react";
const bigSkills = [
  "Object-Oriented Programming",
  "Web Development",
  "Debugging",
  "Javascript",
  "React",
  "Rails",
  "Ruby",
  "HTML",
  "CSS",
];
const mediumSkills = [
  "Java",
  "Python",
  "Communication",
  "Full-Stack Development",
  "Git",
  "JSON",
  "SQLite",
  "PostgreSQL",
  "Teamwork",
  "ActiveRecord",
  "Software Engineering",
];
const smallSkills = [
  "Algorithms",
  "Teaching",
  "Mathematics",
  "Problem Solving",
  "MATLAB",
  "Creativity",
  "Logic",
  "Pair Programming",
  "CRUD",
  "MVC",
  "SQL",
  "Python",
  "C",
];
// let skills = bigSkills.concat(mediumSkills).concat(smallSkills);

function Skills() {
  const [skills, setSkills] = useState(
    bigSkills.concat(mediumSkills).concat(smallSkills)
  );

  useEffect(() => {
    setSkills((s) => shuffleEm(s));
  }, []);

  function shuffleEm(sklz) {
    let arr = [...sklz];
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  return (
    <div id="skills-section" className="section">
      <h4
        className="cursor green-lantern"
        onClick={() => setSkills(shuffleEm(skills))}
      >
        Skills & Technologies
      </h4>
      <ul id="skills-ul">
        {skills.map((sk) => {
          return (
            <li
              className={
                bigSkills.includes(sk)
                  ? "big-skill"
                  : mediumSkills.includes(sk)
                  ? "medium-skill"
                  : "small-skill"
              }
            >
              {sk}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Skills;
