import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navigation';
import MyProfile from '../components/Profile/MyProfile';
import Rockets from '../components/Rocket/Rockets';
import Missions from './Missions';

export default function MyProfilePage() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MyProfile />} />
        <Route exact path="/Mission" element={<Missions />} />
        <Route exact path="/Rockets" element={<Rockets />} />
      </Routes>
    </>
  );
}
