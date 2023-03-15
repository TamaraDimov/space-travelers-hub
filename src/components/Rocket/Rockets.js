import React from 'react';
import PropTypes from 'prop-types';
import style from '../style/style.css';

export default function Rockets({ name, description, image }) {
  return (
    <main className={style.main}>
      <div className="card">
        <div>
          <p>ljguk</p>
          <image src={image} className="image>" alt="rocket" />
        </div>
        <div className="options">
          <h3 className="name">{name}</h3>
          <p className="description>">{description}</p>
          <button type="button" className="reserved">
            Reserved
          </button>
        </div>
      </div>
    </main>
  );
}

Rockets.defaultProps = { name: '', description: '', image: '' };
Rockets.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
