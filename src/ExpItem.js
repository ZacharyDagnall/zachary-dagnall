import React, { useState } from "react";

function ExpItem({ experience }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="exp-item">
      <div className="exp-title">
        {experience.title}
        <span
          className="expand-button item cursor"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "-" : "+"}
        </span>
      </div>
      <div className="exp-dates">
        <span className="exp-start">{experience.start}</span>
        {" - "}
        <span className="exp-end">{experience.end}</span>
      </div>
      <div className="exp-who">
        {typeof experience.forWho === "string"
          ? experience.forWho
          : showDetails
          ? null
          : "Multiple Employers"}
      </div>
      {showDetails ? (
        <div className="exp-details">
          <ul className="employers-list item-ul">
            {typeof experience.forWho !== "string"
              ? experience.forWho.map((e) => {
                  return <li>{e}</li>;
                })
              : null}
          </ul>
          <ul>
            {experience.description
              ? experience.description.map((b) => {
                  return <li>{b}</li>;
                })
              : null}
          </ul>
          {experience.content ? (
            <ul className="exp-content item-ul">
              Content Tutored
              <span
                className="expand-button cursor"
                onClick={() => setShowContent(!showContent)}
              >
                {showContent ? "-" : "+"}
              </span>
              {showContent
                ? experience.content.map((c) => {
                    return <li>{c}</li>;
                  })
                : null}
            </ul>
          ) : null}
          {experience.courses ? (
            <ul className="exp-courses item-ul">
              Courses Taught
              <span
                className="expand-button cursor"
                onClick={() => setShowCourses(!showCourses)}
              >
                {showCourses ? "-" : "+"}
              </span>
              {showCourses
                ? experience.courses.map((c) => {
                    return <li>{c}</li>;
                  })
                : null}
            </ul>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default ExpItem;
