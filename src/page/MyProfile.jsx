import ProfileMissions from '../components/ProfileMissions';

export default function MyProfilePage() {
  return (
    <>
      <ul>
        <li>
          <ProfileMissions />
        </li>
        <li>
          <h2 className="navMissions" to="/missions">
            Rockets
          </h2>
        </li>
      </ul>
    </>
  );
}
