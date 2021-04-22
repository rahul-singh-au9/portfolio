import React from 'react'
import { Link } from "react-router-dom";

const Card = ({img, title, description, link}) => {
  return (
    <div>
      <div class="post">
        <img class="thumbnail" src={img} alt="pic" />
        <div class="post-preview">
          <h6 class="post-title">{title}</h6>
          <p class="post-intro">
            {description}{" "}
          </p>
          <Link
            to={{
              pathname: `${link}`,
            }}
            target="_blank"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card
