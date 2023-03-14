import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissons } from '../redux/missions/missionSlice';
import Mission from '../components/Misson';

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
        { missionList.map((mission) => (
          <Mission
            key={mission.id}
            id={mission.id}
            name={mission.name}
            description={mission.description}
          />
        ))}

      </div>
    </>
  );
}
