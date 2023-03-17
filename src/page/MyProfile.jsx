import ProfileMissions from '../components/Mission/ProfileMissions';
import ProfileRockets from '../components/Rocket/ProfileRockets';

export default function MyProfilePage() {
  return (
    <>
      <ul className="myProfileUl">
        <li className="myProfileLi">
          <ProfileMissions />
        </li>
        <li className="myProfileLi">
          <ProfileRockets />
        </li>
      </ul>
    </>
  );
}
