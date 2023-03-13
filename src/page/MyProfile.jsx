import { Routes, Route } from 'react-router-dom';
import MyProfile from '../components/Profile/MyProfile';
import Rockets from '../components/Rocket/Rockets';

export default function MyProfilePage() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MyProfile />} />
        {/* <Route exact path="/Mission" element={<Mission />} /> */}
        <Route exact path="/Rockets" element={<Rockets />} />
      </Routes>
    </>
  );
}
