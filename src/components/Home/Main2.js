import React from 'react';
import { Link } from 'react-router-dom';
import GitHubCalendar from 'react-github-calendar';
import { PROFILE, SKILLS, SOCIAL_LINKS } from '../../constants/projectData';
import "../style.css";

const Main2 = () => {
  return (
    <section className="s2">
      <div className="main-container">
        <div className="about-wrapper">
          <div className="about-me">
            <h4>More about me</h4>

            <p>{PROFILE.tagline}</p>
            <p>{PROFILE.description}</p>

            <hr/>

            <h4>TOP EXPERTISE</h4>

            <p>
              {PROFILE.expertise}: <Link to="/files/Resume.pdf" target="_blank" download>Download Resume</Link>
            </p>

            <div id="skills">
              <ul>
                {SKILLS.primary.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>

              <ul>
                {SKILLS.secondary.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="social-links">
            <GitHubCalendar username={SOCIAL_LINKS.github.username}/>

            <h3>Find me on Github & Linkedin</h3>

            <a
              href={SOCIAL_LINKS.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              {SOCIAL_LINKS.github.display}
            </a>
            <br/>
            <a
              href={SOCIAL_LINKS.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              {SOCIAL_LINKS.linkedin.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main2;
