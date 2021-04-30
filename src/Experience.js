import React from "react";
import ExpItem from "./ExpItem";
const exps = [
  {
    title: "Adjunct Professor",
    forWho: "RVCC (Prison Program)",
    location: "New Jersey Prison System",
    start: "May 2018",
    end: "December 2020",
    courses: ["Algebra", "Number Systems"],
    description: [],
  },
  {
    title: "Adjunct Professor",
    forWho: "Kean University",
    location: "Union, NJ",
    start: "January 2019",
    end: "May 2020",
    courses: ["Discrete Structures", "Calculus", "Applied Statistics"],
    description: [],
  },
  {
    title: "Adjunct Professor",
    forWho: "Montclair State University",
    location: "Montclair, NJ",
    start: "June 2016",
    end: "August 2017",
    courses: ["Pre-College Algebra", "The Development of Mathematics"],
    description: [],
  },
  {
    title: "",
    forWho: "",
    location: "",
    start: "",
    end: "",
    description: [],
  },
];

function Experience() {
  return (
    <div id="experience-section" className="section">
      <h4>Work Experience</h4>
      {exps.map((e, i) => {
        return <ExpItem key={i} experience={e} />;
      })}
    </div>
  );
}

export default Experience;
