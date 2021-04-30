import React, { useState } from "react";

function ExpItem({ experience }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div
      className="exp-item cursor"
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className="exp-title">{experience.title}</div>
      {showDetails ? (
        <div className="exp-details">
          <div className="exp-who">{experience.forWho}</div>
          <div className="exp-location">{experience.location}</div>
          <div className="exp-start">{experience.start}</div>
          <div className="exp-end">{experience.end}</div>
          <div className="exp-courses">{experience.courses}</div>
          <div className="exp-description">{experience.description}</div>
        </div>
      ) : null}
    </div>
  );
}

export default ExpItem;
