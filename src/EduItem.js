import React, { useState } from "react";

const EduItem = ({ education }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showCS, setShowCS] = useState(false);
  const [showMath, setShowMath] = useState(false);

  return (
    <div className="edu-item">
      <div className="edu-title">
        {education.title}
        {education.mathCourses || education.csCourses ? (
          <span
            className="expand-button item cursor"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "-" : "+"}
          </span>
        ) : null}
      </div>
      <div className="edu-dates">
        <span className="edu-start">{education.start}</span>
        {" - "}
        <span className="edu-end">{education.end}</span>
      </div>
      {showDetails ? (
        <div className="edu-details">
          {education.csCourses ? (
            <ul className="edu-cs item-ul">
              Computer Science courses
              <span
                className="expand-button cursor"
                onClick={() => setShowCS(!showCS)}
              >
                {showCS ? "-" : "+"}
              </span>
              {showCS
                ? education.csCourses.map((c) => {
                    return <li>{c}</li>;
                  })
                : null}
            </ul>
          ) : null}
          {education.mathCourses ? (
            <ul className="edu-math item-ul">
              Math courses
              <span
                className="expand-button cursor"
                onClick={() => setShowMath(!showMath)}
              >
                {showMath ? "-" : "+"}
              </span>
              {showMath
                ? education.mathCourses.map((c) => {
                    return <li>{c}</li>;
                  })
                : null}
            </ul>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default EduItem;
