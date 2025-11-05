import React from 'react';
import { Link } from "react-router-dom";
import Card from "./Card";
import { PROJECTS } from '../../constants/projectData';
import "../style.css";

const Main3 = () => {
  return (
    <section className="s1">
      <div className="main-container">
        <h3 style={{ textAlign: "center" }}>Some of my past projects</h3>

        <div className="post-wrapper">
          {PROJECTS.map((project) => (
            project.isExternal ? (
              <Card
                key={project.id}
                img={project.img}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ) : (
              <div key={project.id}>
                <div className="post">
                  <img
                    className="thumbnail"
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                  />
                  <div className="post-preview">
                    <h6 className="post-title">{project.title}</h6>
                    <p className="post-intro">{project.description}</p>
                    <Link to={project.link}>Read More</Link>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main3;
