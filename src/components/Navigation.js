import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="app">

        <nav>
          <ul className="navContainer">
            <li>
              <image src="src\aspects\space.png" className="image" />
            </li>
            <li className="navHeader">
              <h1>Space Traveler's Hub</h1>
            </li>
            <li>
              <Link className="navBooks" to="/">Rockets</Link>
            </li>
            <li>
              <Link className="navCategories" to="/categories">Missions</Link>
            </li>
            <li className="navBorderLine" />
            <li>
              <Link className="navCategories" to="/categories">My Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}