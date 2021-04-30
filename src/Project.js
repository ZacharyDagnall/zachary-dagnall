import React, { useState } from "react";

function Project({ project }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="project-card" onClick={() => setShowDetails(!showDetails)}>
      <div className="project-title">{project.title}</div>
      {showDetails ? (
        <div className="project-details">
          <div className="project-links">
            <a
              className="project-link link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo
            </a>
            {project.link ? (
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                Click here to visit the site!
              </a>
            ) : null}
          </div>
          <iframe
            width="560"
            height="315"
            src={project.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : null}
    </div>
  );
}

export default Project;
