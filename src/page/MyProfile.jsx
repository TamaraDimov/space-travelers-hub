import { Routes, Route } from 'react-router-dom';
import MyProfile from '../components/Profile/MyProfile';
import Rockets from '../components/Rocket/Rockets';
import Missions from './Missions';

export default function MyProfilePage() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MyProfile />} />
        <Route exact path="/Mission" element={<Missions />} />
        <Route exact path="/Rockets" element={<Rockets />} />
      </Routes>
    </>
  );
}
