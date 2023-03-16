import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missionSlice';

export default function Mission({
  id, name, description, reserved,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <section className="missions">
        <div>
          <ul className="missionList">
            <li className="missionListElements">
              <h3>{name}</h3>
            </li>
            <li className="missionListElements">
              <p>{description}</p>
            </li>
            <li className="missionListElements">
              <h4 className={reserved ? 'active' : 'notactive'}>
                {reserved ? 'Active Member' : 'Not A MEMBER'}
              </h4>
            </li>
            <li className="missionListElements">
              <button
                className={reserved ? 'leave' : 'join'}
                type="button"
                onClick={
                  reserved
                    ? () => {
                      dispatch(leaveMission(id));
                    }
                    : () => {
                      dispatch(joinMission(id));
                    }
                }
              >
                {reserved ? 'Leave Mission' : 'Join Mission'}
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
