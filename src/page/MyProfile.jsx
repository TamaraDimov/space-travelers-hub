export default function MyProfilePage() {
  return (
    <>
      <ul>
        <li>
          <h2 className="/navRockets" to="/rocket">
            Rockets
          </h2>
        </li>
        <li>
          <h2 className="navMissions" to="/missions">
            Missions
          </h2>
        </li>
      </ul>
    </>
  );
}
