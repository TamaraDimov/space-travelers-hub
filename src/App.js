import MyProfilePage from './page/MyProfile';
import './App.css';
import Rockets from './page/Rocket';
import Navbar from './components/Navigation';

function App() {
  return (
    <>
      <Navbar />
      <MyProfilePage />
      <Rockets />
    </>
  );
}

export default App;
