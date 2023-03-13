import { Link } from 'react-router-dom';

const MyProfile = () => {
  <ul>
    <li>
      <Link className="/rockets" to="/">
        Rockets
      </Link>
    </li>
    <li>
      <Link className="navRocket" to="/rocket">
        Rocket
      </Link>
    </li>
  </ul>;
};

export default MyProfile;
