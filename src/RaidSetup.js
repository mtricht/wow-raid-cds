import React, { useState } from 'react';
import classes from './data/classes.json';

function RaidSetup({ players, setPlayers }) {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerClass, setNewPlayerClass] = useState("");
  const addPlayer = () => {
    if (newPlayerName === "" || newPlayerClass === "") {
      return;
    }
    const newPlayers = [...players];
    newPlayers.push({
      name: newPlayerName,
      class: newPlayerClass
    });
    setPlayers(newPlayers);
    setNewPlayerName("");
    setNewPlayerClass("");
  };
  const removePlayer = (name) => {
    setPlayers(players.filter(player => player.name !== name));
  };
  return (
    <div className="col-3">
      <form className="form-inline">
        <input placeholder="Player's name" type="text" className="form-control mb-2 mr-sm-2"
          value={newPlayerName} onChange={event => setNewPlayerName(event.target.value)}
          style={{ width: "170px" }} />
        <div className="input-group mb-2 mr-sm-2">
          <select className="form-control" value={newPlayerClass} onChange={event => setNewPlayerClass(event.target.value)}>
            <option value="">Select a class</option>
            {Object.keys(classes).sort().map(classKey =>
              <option key={classKey} value={classKey}>{classes[classKey].name}</option>
            )}
          </select>
          <div className="input-group-append">
            <div className="input-group-text"><i className="fas fa-plus" onClick={addPlayer} /></div>
          </div>
        </div>
      </form>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class (spec)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => <tr key={player.name}>
            <td style={{ color: "#" + classes[player.class].color }}>{player.name}</td>
            <td style={{ color: "#" + classes[player.class].color }}>{classes[player.class].name}</td>
            <td><i className="fas fa-trash" id="trash" onClick={() => removePlayer(player.name)} /></td>
          </tr>)}
        </tbody>
      </table>
      <p>By <a href="https://tricht.dev/" target="_blank" rel="noreferrer">Michael</a> - <a href="https://github.com/mtricht/wow-raid-cds" target="_blank" rel="noreferrer">View on <i className="fab fa-github"></i></a></p>
    </div>
  );
}

export default RaidSetup;
