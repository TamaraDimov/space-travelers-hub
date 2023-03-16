import React from 'react';
import { useSelector } from 'react-redux';
// import { allMissions } from '../redux/missions/missionSlice';

export default function ProfileMissions() {
  const { missionList } = useSelector((store) => store.missions);
  // console.log('we are here', missionList);
  const joinedMission = missionList.filter((mission) => mission.reserved === true);
  if (joinedMission.length === 0) {
    return (
      <>
        <div>
          <div>
            <p>No joined missions</p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <h2> My Missions</h2>
      </div>
      <div>
        {joinedMission.map((mission) => (
          <div key={mission.id}>
            <p>
              {mission.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
