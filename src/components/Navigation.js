import { NavLink } from 'react-router-dom';
import style from './style/style.css';
import planet from '../aspects/space.png';

export default function Navbar() {
  return (
    <>
      <div className={style.app}>
        <nav className="navContainer">
          <div className="title">
            <img src={planet} alt="Space Travel Hub logo" className="logo" />
            <h1 className="navHeader">Space Traveler&apos;s Hub</h1>
          </div>
          <ul className="navLinks">
            <li>
              <NavLink className="/navRockets" to="/rockets">
                Rockets
              </NavLink>
            </li>
            <li>
              <NavLink className="navMissions" to="/missions">
                Missions
              </NavLink>
            </li>
            <li className="navBorderLine" />
            <li>
              <NavLink className="navMyProfile" to="/myProfile">
                My Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
