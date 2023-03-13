import React from 'react';
import PropTypes from 'prop-types';

export default function Rockets({ image, title, description }) {
  <>
    <div className="card">
      <div className="options">
        <p>{image}</p>
        <h3 className="title">{title}</h3>
        <p className="description>">{description}</p>
        <button type="button" className="reserved">
          Reserved
        </button>
      </div>
    </div>
  </>;
}

Rockets.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
