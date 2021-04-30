import React from "react";
import EduItem from "./EduItem";
const edus = [
  {
    title: "Flatiron School",
    start: "January 2021",
    end: "April 2021",
  },
  {
    title: "Montclair State University",
    start: "January 2016",
    end: "January 2018",
    csCourses: ["Fundamentals of Scientific Computing"],
    mathCourses: [
      "Complex Variables",
      "Topology",
      "Applied Industrial Mathematics",
      "Linear Algebra",
      "Numerical Analysis",
      "Abstract Algebra",
      "Applied Mathematics, Continuous",
      "Operations Research",
      "Real Variables",
      "Combinatorial Mathematics",
    ],
  },
  {
    title: "Kean University",
    start: "September 2012",
    end: "January 2016",
    csCourses: [
      "Data Structures & Algorithms",
      "Analysis of Algorithms",
      "Robotics & Automation",
      "Computer Organization & Programming",
      "Fundamentals of Computer Science",
      "Mathematical Software",
    ],
    mathCourses: [
      "Calculus III",
      "Calculus IV",
      "Differential Equations",
      "Matrix & Linear Algebra",
      "Combinatorial Graph Theory",
      "Complex Variables",
      "Euclidean and Non-Euclidean Geometry",
      "Probability and Mathematical Statistics",
      "Abstract Algebra I",
      "Abstract Algebra II",
      "Advanced Calculus I",
    ],
  },
];

function Education() {
  return (
    <div id="education-section" className="section">
      <h4>Education</h4>
      {edus.map((e, i) => {
        return <EduItem key={i} education={e} />;
      })}
    </div>
  );
}

export default Education;
