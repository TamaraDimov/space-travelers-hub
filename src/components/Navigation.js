import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="app">
        <nav>
          <ul className="navContainer">
            <li>
              <img
                className="space"
                src="./aspects/space.png"
                alt="space logo"
              />
              Space Traveler&apos;s Hub
            </li>
            <li className="navHeader">
              <h1>Space Traveler&apos;s Hub</h1>
            </li>
            <li>
              <Link className="/navRockets" to="/rockets">
                Rockets
              </Link>
            </li>
            <li>
              <Link className="navMissions" to="/missions">
                Missions
              </Link>
            </li>
            <li className="navBorderLine" />
            <li>
              <Link className="navMyProfile" to="/myProfile">
                My Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
