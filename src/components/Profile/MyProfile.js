import { Link } from 'react-router-dom';

const MyProfile = () => {
  <ul>
    <li>
      <Link className="/rockets" to="/">Rockets</Link>
    </li>
    <li>
      <Link className="navMissions" to="/missions">Missions</Link>
    </li>
  </ul>;
};

export default MyProfile;
