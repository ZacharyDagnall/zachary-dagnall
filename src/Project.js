import React, { useState } from "react";

function Project({ project }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="project-card">
      <div className="project-title">
        {project.title}
        <span
          className="expand-button item cursor"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "-" : "+"}
        </span>
      </div>

      {showDetails ? (
        <div className="project-details">
          <div className="desc-and-vid-wrapper">
            <div className="project-description">
              {project.description}
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
                    className="project-link link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here to visit the site!
                  </a>
                ) : null}
              </div>
            </div>
            <iframe
              width="75%"
              height="315"
              src={project.video}
              title="YouTube video player"
              frameBorder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Project;
