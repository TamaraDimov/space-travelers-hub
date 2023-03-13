import React from 'react';
import PropTypes from 'prop-types';

export default function Mission({ mission, description, status }) {
  return (
    <>
      <section className="missions">
        <div>
          <ul className="missonsHeads">
            <li>Mission</li>
            <li>Description</li>
            <li>Status</li>
            <li />
          </ul>
        </div>
        <div>
          <ul className="missionsIndex">
            <li><h2>{mission}</h2></li>
            <li>
              <p>
                {description}
              </p>

            </li>
            <li><h3>{status}</h3></li>
            <li><button type="button">Join Mission</button></li>
          </ul>
        </div>
      </section>
    </>
  );
}

Mission.propTypes = {
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
