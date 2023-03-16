import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Rockets from './page/Rocket';
import Missions from './page/Missions';
import Navbar from './components/Navigation';
import MyProfile from './page/MyProfile';
import { fetchRockets } from './redux/rockets/rocketSlice';
import store from './redux/store';
import { getMissons } from './redux/missions/missionSlice';

const App = () => {
  store.dispatch(fetchRockets());
  store.dispatch(getMissons());
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Navigate to="rockets" replace />} />
        <Route path="/myProfile/*" element={<MyProfile />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </>
  );
};

export default App;
