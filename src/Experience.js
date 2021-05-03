import React from "react";
import ExpItem from "./ExpItem";
const exps = [
  {
    title: "Adjunct Professor",
    forWho: "Raritan Valley Community College (Prison Program)",
    location: "New Jersey Prison System",
    start: "May 2018",
    end: "December 2020",
    courses: ["Algebra", "Number Systems"],
    description: [
      "Taught college math courses in various prisons across NJ to classes of inmates working towards their Associates Degrees through the NJSTEP program.",
      "Restructured curriculum to flow in a more intuitive order, resulting in an increase of students’ learning and retention",
      "Adapted teaching format to an environment with more restrictions than traditional on-campus instruction",
      "Further adapted teaching format to non-online remote education during the COVID-19 Pandemic.",
    ],
  },
  {
    title: "Tutor",
    forWho: [
      "Rising Future",
      "Montclair State University",
      "Kean University",
      "Private Tutoring",
      "The Tutoring Center",
    ],
    content: ["Math", "Java", "Grammar", "Physics", "Test Prep"],
    location: "New Jersey",
    start: "Nov 2010",
    end: "Nov 2020",
    description: [
      "Used a question-driven style to help students arrive at answers themselves and deeply understand fundamental concepts",
      "Developed rapport with students to increase not only their grades but their confidence in their own abilities and understanding",
      "Guided students in preparing for SAT, SAT Subject, AMC8, and AP exams, resulting in high and excellent scores",
    ],
  },
  {
    title: "Adjunct Professor",
    forWho: "Kean University",
    location: "Union, NJ",
    start: "January 2019",
    end: "May 2020",
    courses: ["Discrete Structures", "Calculus", "Applied Statistics"],
    description: [
      "Taught course material to students of all range of majors, including Math, Computer Science, Business, Liberal Arts, and many more.",
      "Created lesson plans that made course material interesting, relevant, and fun to a young generation.",
      "Used a discussion-driven approach to engage students and help them focus on core concepts. ",
      "Adapted teaching format to online remote education during the COVID-19 Pandemic.",
    ],
  },
  {
    title: "Academic Advisor",
    forWho: "Raritan Valley Community College (Prison Program)",
    location: "New Jersey Prison System",
    start: "Jan 2020",
    end: "May 2020",
    description: [
      "Acted as an in-person liaison between the college and the students enrolled in the college's prison program.",
      "Administered sensitive paperwork and proctored exams.",
      "Answered student questions about the program and about specific student issues.",
    ],
  },
  {
    title: "Adjunct Professor",
    forWho: "Montclair State University",
    location: "Montclair, NJ",
    start: "June 2016",
    end: "August 2017",
    courses: ["Pre-College Algebra", "The Development of Mathematics"],
    description: [
      "Taught fast-paced courses to students in the EOF program.",
      "Balanced giving individualized attention with teaching the class as a whole.",
      "Helped struggling students change their way of thinking about key concepts in order to succeed where they had previously failed.",
    ],
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
