import ProfileMissions from '../components/Mission/ProfileMissions';
import ProfileRockets from '../components/Rocket/ProfileRockets';

export default function MyProfilePage() {
  return (
    <>
      <ul>
        <li>
          <ProfileMissions />
        </li>
        <li>
          <ProfileRockets />
        </li>
      </ul>
    </>
  );
}
