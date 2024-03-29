import React from 'react'
import {Link} from 'react-router-dom'
import "../style.css"
import "./Post.css"

const img1 = "https://i.ibb.co/ScYfC1m/hotel1.png"

const img2 = "https://i.ibb.co/6BmLN6m/hotel7.png"

const img3 = "https://i.ibb.co/XZ5BpDq/hotel6.png"

const img4 = "https://i.ibb.co/48PWb1T/hotel2.png"

const img5 = "https://i.ibb.co/sQQ2ZTk/hotel3.png"

const img6 = "https://i.ibb.co/GJn0RD1/hotel4.png"

const img7 = "https://i.ibb.co/GWXBTfS/hotel5.png"

const Post2 = () => {
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

                <h3>Hotel Booking System</h3>

                <p>This was one of the  project I created with React-Js. I was the sole creator/developer for the project .
                <br/><br/>
                This project was a hotel booking app and have all the functionality that a real hotel wants to have including log-in, sign-up, all types of filter, Recommandations of the hotels on the basis of filters.
                <br/><br/>
                Cost filter, Room filter and booking the hotels were also some of the Functionalities.
                search results would be generated by fetching the API's . User can see all the hotels listed and all the discription about the hotel .
                <br/><br/>
                Customers had the ability to view all their data with a dynamic search form, and would get email after placing a booking
                <br/><br/>
                I worked on this system for 2 weeks as my frontend React-Js project, one of my most favourite library to work on is React-Js</p>

                <h5>Technologies:</h5>

                <ul>
                      <li>- React JS</li>
                      <li>- Hotel Api</li>
                      <li>- Json-sever (Local Api)</li>
                      <li>- JWT Log-in & Sign-up</li>
                      <li>- BootStrap</li>
                      <li>- Material-Ui</li>
                      <li>- Google Maps API</li>
                      <li>- Google Fonts</li>
                </ul>

                <h5>Login Dashboard</h5>
                <div class="img-container">
                  <img src={img2} alt="pic"/>
                </div>

                <h5>Sample Signup Form</h5>
                <div class="img-container">
                  <img src={img3} alt="pic"/>
                </div>

                <h5>Recommandations on the basis of trip type</h5>
                <div class="img-container">
                  <img src={img4} alt="pic"/>
                </div>

                <h5>Filter Results (Cost and Room type)</h5>
                <div class="img-container">
                  <img src={img5} alt="pic"/>
                </div>

                <h5>Hotel Details Page</h5>
                <div class="img-container">
                  <img src={img6} alt="pic"/>
                </div>

                <h5>Booking Page</h5>
                <div class="img-container">
                  <img src={img7} alt="pic"/>
                </div>
          </div>
    </div>
    )
}

export default Post2
