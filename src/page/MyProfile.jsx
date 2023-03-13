/*eslint-disable*/

import { Routes, Route } from 'react-router-dom';
import MyProfile from '../components/Profile/MyProfile';

export default function MyProfilePage() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<MyProfile />} />
        <Route exact path="/Mission" element={<Mission />} />
        <Route exact path="/Rockets" element={<Rockets />} />
      </Routes>
    </>
  );
}
