import React from 'react';
import { useSelector } from 'react-redux';

export default function ProfileMissions() {
  const { missionList } = useSelector((store) => store.missions);
  const joinedMission = missionList.filter(
    (mission) => mission.reserved === true,
  );
  if (joinedMission.length === 0) {
    return (
      <>
        <div>
          <div>
            <h2 className="reservationTableTitle"> My Missions</h2>

            <p className="reservationTable">No joined missions</p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <h2 className="reservationTableTitle"> My Missions</h2>
      </div>
      <div>
        {joinedMission.map((mission) => (
          <div key={mission.id}>
            <p className="reservationTable">{mission.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
