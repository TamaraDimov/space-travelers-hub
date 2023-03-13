import {
  Routes, Route,
} from 'react-router-dom';
import './App.css';
import Missions from './page/Missions';
import Navbar from './components/Navigation';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<MyProfile />} /> */}
        <Route path="/missions" element={<Missions />} />
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </>
  );
}

export default App;
