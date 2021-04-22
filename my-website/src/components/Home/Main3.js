import { Link } from "react-router-dom";
import "../style.css";
import Card from "./Card";

// const img1 = "https://i.ibb.co/ykJw1NZ/food1.png";
const img2 = "https://i.ibb.co/ScYfC1m/hotel1.png";
const img3 = "https://i.ibb.co/xL0yfNr/m-tube1.png";
const img4 = "https://i.ibb.co/ctXp9Q1/new-home7.png";
const img5 = "https://i.ibb.co/C713f5H/Screenshot-52.png";
const img6 = "https://i.ibb.co/bJtkmRC/Screenshot-50.png";
const img7 = "https://i.ibb.co/qkY6Fd5/Screenshot-4.png";
const link1 = "https://alan-ai-news-app-react.herokuapp.com/";
const link2 = "https://urban-services.netlify.app/";
const link3 = "https://studio-ghibli-universe.herokuapp.com/home";
const link4 = "https://aqi-react.netlify.app/";

const Main3 = () => {
  return (
    <section class="s1">
      <div class="main-container">
        <h3 style={{ textAlign: "center" }}>Some of my past projects</h3>

        <div class="post-wrapper">
          <Card
            img={img4}
            title="Alan Ai News App"
            description="Designed built & mantained a Ai News App , you can ask
                        news on clicking on that mic and navigate through whole application using voice commands."
            link={link1}
          />

          <Card
            img={img5}
            title="Urban Services"
            description="This app is similar to urban company. it provides services and user can also join as a seller and list their services and got pay directly into their stripe account"
            link={link2}
          />

          <Card
            img={img6}
            title="Studio Ghibli Universe"
            description="Studio Ghibli is a multi-user level fullstack ANIME app where a user can book a service and buy products, a seller can manage all his booking, orders and products."
            link={link3}
          />

          <Card
            img={img7}
            title="Know Air Quality Index(AQI)"
            description="This app provides real time Air quality index of your city and your area."
            link={link4}
          />

          {/* <div>
                <div class="post">
                  <img class="thumbnail" src={img1} alt="pic" />
                  <div class="post-preview">
                    <h6 class="post-title">Chomp-Champ Food delivery App</h6>
                    <p class="post-intro">
                      Designed built & mantained a food delivery app as my very
                      first projects{" "}
                    </p>
                    <Link to="/post1">Read More</Link>
                  </div>
                </div>
              </div> */}

          <div>
            <div class="post">
              <img class="thumbnail" src={img2} alt="pic" />
              <div class="post-preview">
                <h6 class="post-title">Plan Your Trip - hotel system</h6>
                <p class="post-intro">
                  Online hotel booking and planning your trips App with the help
                  of React js{" "}
                </p>
                <Link to="/post2">Read More</Link>
              </div>
            </div>
          </div>

          <div>
            <div class="post">
              <img class="thumbnail" src={img3} alt="pic" />
              <div class="post-preview">
                <h6 class="post-title">M-Tube</h6>
                <p class="post-intro">
                  Created an App Similar to Youube app using youtube API with
                  React js and Redux
                </p>
                <Link to="/post3">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main3;
