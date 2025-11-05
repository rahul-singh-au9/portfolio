import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ img, title, description, link }) => {
  return (
    <div className="post">
      <img
        className="thumbnail"
        src={img}
        alt={title}
        loading="lazy"
      />
      <div className="post-preview">
        <h6 className="post-title">{title}</h6>
        <p className="post-intro">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more-link"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
