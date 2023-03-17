import React from 'react';
import { useSelector } from 'react-redux';

export default function ProfileMissions() {
  const { missionList } = useSelector((store) => store.missions);
  const joinedMission = missionList.filter(
    (mission) => mission.reserved === true,
  );
  return (
    <div>
      <h2 className="reservationTableTitle"> My Missions</h2>
      {joinedMission.length === 0 ? (
        <p className="reservationTable">No joined missions</p>
      ) : (
        <div>
          {joinedMission.map((mission) => (
            <div key={mission.id}>
              <p className="reservationTable">{mission.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
