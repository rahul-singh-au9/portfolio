import React from 'react'
import {Link} from 'react-router-dom'
import "../style.css"
import "./Post.css"

const img1 = "https://scontent-del1-1.xx.fbcdn.net/v/t1.0-9/136374943_1179773875786071_7891782408923484502_o.jpg?_nc_cat=109&ccb=2&_nc_sid=730e14&_nc_ohc=h1ofbXgNEasAX_fbvyr&_nc_oc=AQnN6Ywmedlj6YZiHbNYeDgGN0_M4zf0qtkLxBBYZw4z65Lf612vdPLgUF2fSsVuZ80&_nc_ht=scontent-del1-1.xx&oh=24848049f8ca76af4aa42dbf80369bad&oe=601E5F68"

const img2 = "https://scontent-del1-1.xx.fbcdn.net/v/t1.0-9/136067009_1179773849119407_4497037033524110721_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=CBzHtoUFKGIAX_7gfyv&_nc_ht=scontent-del1-1.xx&oh=93b4ad00f736e791beed0fa84f53fb0d&oe=60209CF9"

const img3 = "https://scontent-del1-1.xx.fbcdn.net/v/t1.0-9/137330661_1179773895786069_387153741907857559_o.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_ohc=6b0gQ4fe7UkAX-NTenc&_nc_ht=scontent-del1-1.xx&oh=287b2fa6eda47a2e2a4b1f2ad470be37&oe=6020050B"

const img4 = "https://scontent-del1-1.xx.fbcdn.net/v/t1.0-9/136029371_1179773855786073_2820367268958495507_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=u6qkg0E6agEAX_iw6P9&_nc_ht=scontent-del1-1.xx&oh=1ce1ac09f6a04c64fcbb358efc9d2ae1&oe=601D85DA"

const img5 = "https://scontent-del1-1.xx.fbcdn.net/v/t1.0-9/135559282_1179773885786070_8441706316805260513_o.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_ohc=sOJOAFE4zjwAX-8Tj2-&_nc_ht=scontent-del1-1.xx&oh=cc2b6aaeb16ae8126397823201083af7&oe=601D3ABA"

const img6 = "https://scontent-del1-1.xx.fbcdn.net/v/t1.0-9/135301135_1179773889119403_1040144048459555480_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=HlFiPf_s0ucAX_V1ADy&_nc_ht=scontent-del1-1.xx&oh=1732c3b26d3e92c7e4b3c5ce22a9354b&oe=601F4936"


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
