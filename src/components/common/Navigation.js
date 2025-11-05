import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = ({ showContact = true }) => {
  return (
    <div className="nav-wrapper">
      <Link to="/">
        <div className="dots-wrapper">
          <div id="dot-1" className="browser-dot"></div>
          <div id="dot-2" className="browser-dot"></div>
          <div id="dot-3" className="browser-dot"></div>
        </div>
      </Link>

      {showContact && (
        <ul id="navigation">
          <li>
            <Link to="/#contactt">Contact</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

Navigation.propTypes = {
  showContact: PropTypes.bool,
};

export default Navigation;

