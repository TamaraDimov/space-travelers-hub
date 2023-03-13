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
              <h1>Space Travelers Hub</h1>
            </li>
            <li>
              <Link className="/rockets" to="/">Rockets</Link>
            </li>
            <li>
              <Link className="navMissions" to="/missions">Missions</Link>
            </li>
            <li className="navBorderLine" />
            <li>
              <Link className="navMyProfile" to="/myProfile">My Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
