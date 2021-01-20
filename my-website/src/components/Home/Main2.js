import React from 'react'
import {Link} from 'react-router-dom'
import GitHubCalendar from 'react-github-calendar';
import "../style.css"

const Main2 = () => {
      return (
      <section className="s2">
            <div className="main-container">

                  <div className="about-wrapper">
                        <div className="about-me">
                              <h4>More about me</h4>

                              <p>I build new projects just to tickle my brain and love teaching others how they're made.</p>

                              <p>While I keep busy building projects, I still try to intract people in search of a great team & projects that interest me.</p>


                              <hr/>

                              <h4>TOP EXPERTISE</h4>

                              <p>Fullstack developer with primary focus on JavaScript + React: <Link to="/files/Resume.pdf" target="_blank" download>Download Resume</Link></p>

                              <div id="skills">
                                    <ul>
                                          <li>JavaScript</li>
                                          <li>React</li>
                                          <li>Redux</li>
                                          <li>Python</li>
                                          <li>Node</li>
                                    </ul>

                                    <ul>
                                          <li>Google Maps API</li>
                                          <li>JS Charts</li>
                                          <li>AWS (RDS/S3)</li>
                                          <li>Heroku</li>
                                          <li>HTML/CSS</li>
                                    </ul>
                              </div>
                        </div>

                        <div className="social-links">
                              {/* <img id="social_img" src="" alt="pic"/> */}
                              <GitHubCalendar username="rahul-singh-au9"/>

                              <h3>Find me on Github & Linkedin</h3>

                              <Link to={{ pathname: "https://github.com/rahul-singh-au9"}} target="_blank"> Github: @rahulsingh-au9 </Link>
                              <br/>
                              <Link to={{ pathname: "https://www.linkedin.com/in/rahul-singh-7b48901b1/"}} target="_blank">Linkedin: @Rahul Singh</Link>
                        </div>
                  </div>
                  </div>
            </section>

      )
}

export default Main2
