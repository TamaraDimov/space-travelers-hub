import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rockets from '../components/Rocket/Rockets';
import { fetchRockets } from '../redux/rockets/rocketSlice';

export default function Rocket() {
  const { rocketList, status } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
    if (status === 'succeed') {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  return (
    <>
      <div>
        {rocketList.map((rocket) => (
          <Rockets
            key={rocket.id}
            id={rocket.id}
            name={rocket.name}
            description={rocket.description}
            image={rocket.flickr_images}
          />
        ))}
      </div>
    </>
  );
}
