import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissons } from '../redux/missions/missionSlice';
import Mission from '../components/Mission/Misson';

export default function Missions() {
  const { missionList, status } = useSelector((store) => store.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(getMissons());
    }
    if (status === 'succeed') {
      dispatch(getMissons());
    }
  }, [status, dispatch]);

  return (
    <>
      <div>
        <ul className="missonsHeads">
          <li className="missionMission">
            <h2>Mission</h2>
          </li>
          <li className="missionDescription">
            <h2>Description</h2>
          </li>
          <li className="missionStatus">
            <h2>Status</h2>
          </li>
          <li />
        </ul>
      </div>
      <div>
        {missionList.map((mission) => (
          <Mission
            key={mission.id}
            id={mission.id}
            name={mission.name}
            description={mission.description}
            reserved={mission.reserved}
          />
        ))}
      </div>
    </>
  );
}
