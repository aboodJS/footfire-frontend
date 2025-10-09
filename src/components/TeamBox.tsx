function TeamBox(name: string, badge: string, Id: number): JSX.Element {
  return (
    <li key={Id}>
      <img src={badge} alt="" />
      {name}
    </li>
  );
}

export default TeamBox;
