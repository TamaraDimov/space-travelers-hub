import React from 'react';
import { useSelector } from 'react-redux';

export default function ProfileRockets() {
  const { rocketList } = useSelector((store) => store.rockets);
  const joinedRockets = rocketList.filter((rocket) => rocket.reserved === true);
  if (joinedRockets.length === 0) {
    return (
      <>
        <div>
          <div>
            <h2 className="reservationTableTitle"> My Rockets</h2>
            <p className="reservationTable">No booked rockets</p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <h2 className="reservationTableTitle"> My Rockets</h2>
      </div>
      <div>
        {joinedRockets.map((rocket) => (
          <div key={rocket.id}>
            <p className="reservationTable">{rocket.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
