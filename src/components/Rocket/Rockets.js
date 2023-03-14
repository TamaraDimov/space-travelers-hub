import React from 'react';
import PropTypes from 'prop-types';

const Rockets = ({ name, description, image }) => (
  <div className="card">
    <div className="options">
      <image className="img" src={image} />
      <h3 className="name">{name}</h3>
      <p className="description>">{description}</p>
      <button type="button" className="reserved">
        Reserved
      </button>
    </div>
  </div>
);

Rockets.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rockets;
