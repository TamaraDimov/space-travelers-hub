import { useDispatch } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import style from '../style/style.css';
import { bookRocket, leaveRocket } from '../../redux/rockets/rocketSlice';

export default function Rockets({
  id, name, description, image, reserved,
}) {
  const dispatch = useDispatch();
  return (
    <main className={style.main}>
      <div className="card">
        <div>
          <img src={image} className="image" alt="rocket" />
        </div>
        <div className="options">
          <h3 className="name">{name}</h3>
          <h4>{reserved ? 'reserved' : ''}</h4>
          <p className="description>">{description}</p>
          <button
            type="button"
            className={reserved ? 'reserved unbook' : 'reserved book'}
            onClick={
              reserved
                ? () => {
                  dispatch(leaveRocket(id));
                }
                : () => {
                  dispatch(bookRocket(id));
                }
            }
          >
            {reserved ? 'Unbook Rocket' : 'Book Rocket'}
          </button>
        </div>
      </div>
    </main>
  );
}

Rockets.defaultProps = {
  id: '',
  name: '',
  description: '',
  image: '',
  reserved: false,
};
Rockets.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  reserved: PropTypes.bool,
};
