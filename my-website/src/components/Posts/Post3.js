import React from 'react'
import {Link} from 'react-router-dom'
import "../style.css"
import "./Post.css"

const img1 = "https://i.ibb.co/jf2dWSj/m-tube1.png"

const img2 = "https://i.ibb.co/BqR41np/m-tube2.png"

const img3 = "https://i.ibb.co/FgPgCJF/m-tube3.png"

const img4 = "https://i.ibb.co/ggnMGTV/m-tube4.png"

const img5 = "https://i.ibb.co/Trrx5cC/m-tube5.png"

const img6 = "https://i.ibb.co/28k58g7/m-tube6.png"


const Post3 = () => {
  return (
    <div>
          <div class="nav-wrapper">

                <Link to="/">
                      <div class="dots-wrapper">
                            <div id="dot-1" class="browser-dot"></div>
                            <div id="dot-2" class="browser-dot"></div>
                            <div id="dot-3" class="browser-dot"></div>
                      </div>
                </Link>

                <ul id="navigation">
                  <li><Link to="/#contactt">Contact</Link></li>

                </ul>
          </div>

          <div class="main-container">
                <br/>

                <div class="img-container">
                  <img src={img1} alt="pic"/>
                </div>

                <h3>M-Tube (similar to YouTube)</h3>

                <p>This was the project I was really exited about creating and really liked it the way it come up after creation. I used React-Js and Redux to complete this project. I was the sole creator/developer of this project. with Redux this was my first project and the way Redux work, i really enjoyed creating it.
                <br/><br/>
                This system had search functionality very much similar to the YOU-TUBE one and the results, it served was amazing and enjoyed playing with it alot.
                <br/><br/>
                the results of the search ware fetched by the YOU_TUBE API . this is one of the fastest api so if you are a developer like me pls look into it and try creating some stuff , i hope you would love it too.
                <br/><br/>
                Users have also a functionality of logging-in. i implemented google log-in for this part.
                <br/><br/>
                I worked on this project for 2 weeks after gaining the knowledge of Redux.</p>

                <h5>Technologies:</h5>

                <ul>
                      <li>- React JS</li>
                      <li>- Redux</li>
                      <li>- YouTube Api</li>
                      <li>- Google O-Auth</li>
                      <li>- Material-Ui</li>
                      <li>- Font Awesome Icons</li>
                      <li>- Google Maps API</li>
                      <li>- Google Fonts</li>
                </ul>

                <h5>All the search Results</h5>
                <div class="img-container">
                  <img src={img2} alt="pic"/>
                </div>

                <h5>Media player (Results)</h5>
                <div class="img-container">
                  <img src={img3} alt="pic"/>
                </div>

                <h5>Input Fields</h5>
                <div class="img-container">
                  <img src={img4} alt="pic"/>
                </div>

                <h5>Input Fields(search)</h5>
                <div class="img-container">
                  <img src={img5} alt="pic"/>
                </div>

                <h5>Search Results</h5>
                <div class="img-container">
                  <img src={img6} alt="pic"/>
                </div>

          </div>
    </div>
    )
}

export default Post3
