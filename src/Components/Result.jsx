export default function GameBox() {
  return (
    <section className="game-info d-flex-c">
      <div className="player-box">
        <div className="player-profile">
          <div
            className="img"
            style={{ backgroundImage: `url(${img1})` }}
          ></div>
          <div className="palyer-info">
            <h2>You</h2>
            <p>Human</p>
          </div>
        </div>
        <hr />
        <table>
          <thead>
            <th>Win</th>
            <th>Lose</th>
            <th>Daw</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>0</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="vs">VS</div>
      <div className="player-box">
        <div className="player-profile">
          <div className="img" style={{ backgroundImage: `url(${img})` }}></div>
          <div className="palyer-info">
            <h2>Mayza</h2>
            <p>Roboot</p>
          </div>
        </div>
        <hr />
        <table>
          <thead>
            <th>Win</th>
            <th>Lose</th>
            <th>Daw</th>
          </thead>
          <tbody>
            <tr>
              <td>100</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
