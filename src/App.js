import React, { useState } from 'react';
import './App.css';
import classes from './classes.json';
import bosses from './castle_nathria.json';
import {Button} from 'react-bootstrap';
import Cooldown from './Cooldown.js';

function App() {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerClass, setNewPlayerClass] = useState("");
  const [players, setPlayers] = useState([]);
  const addPlayer = () => {
    if (newPlayerName === "" || newPlayerClass === "") {
      return;
    }
    players.push({
      name: newPlayerName,
      class: newPlayerClass
    });
    setPlayers(players);
    setNewPlayerName("");
    setNewPlayerClass("");
  };
  const removePlayer = (name) => {
    setPlayers(players.filter(player => player.name !== name));
  };
  const [encounter, setEncounter] = useState("");
  const [assignments, setAssignments] = useState([]);
  return (
    <div class="d-flex flex-row">
      <div>
        <h2>Raid setup</h2>
        <form class="form-inline">
          <input placeholder="Player's name" type="text" class="form-control mb-2 mr-sm-2" 
            value={newPlayerName} onChange={event => setNewPlayerName(event.target.value)} />
          <div class="input-group mb-2 mr-sm-2">
            <select class="form-control" value={newPlayerClass} onChange={event => setNewPlayerClass(event.target.value)}>
              <option value="">Select a class</option>
              {Object.keys(classes).sort().map(classKey => 
                <option value={classKey}>{classes[classKey].name}</option>
              )}
            </select>
            <div class="input-group-append">
              <div class="input-group-text"><i class="fas fa-plus" onClick={addPlayer} /></div>
            </div>
          </div>
        </form>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Class (spec)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {players.map(player => <tr key={player.name}>
              <td style={{color: "#" + classes[player.class].color}}>{player.name}</td>
              <td style={{color: "#" + classes[player.class].color}}>{classes[player.class].name}</td>
              <td><i class="fas fa-trash" id="trash" onClick={() => removePlayer(player.name)} /></td>
            </tr>)}
          </tbody>
        </table>
        <p>By <a href="https://tricht.dev/" target="_blank" rel="noreferrer">Michael</a> - <a href="https://github.com/mtricht/wow-raid-cds" target="_blank" rel="noreferrer">View on <i class="fab fa-github"></i></a></p>
      </div> 
      <div style={{marginLeft: "40px", width: "50%"}}>
        <h2>Cooldown assignments</h2>
        <select value={encounter} class="form-control mb-2 mr-sm-2" style={{width: "300px"}}
          onChange={event => setEncounter(event.target.value)}>
          <option value="">Select an encounter</option>
          {Object.keys(bosses).map(boss => <option value={boss}>{bosses[boss].name}</option>)}
        </select>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th>Time</th>
              <th>Ability</th>
              <th>Assignment</th>
            </tr>
          </thead>
          <tbody>
            {encounter !== "" && bosses[encounter].timers.map(ability => <tr>
              <td>{new Date(ability.time * 1000).toISOString().substr(14, 5)}</td>
              <td>{ability.name}</td>
              <td>
              <Cooldown players={players} assignments={assignments} setAssignments={setAssignments} />
              </td>
            </tr>)}
          </tbody>
        </table>
        <Button className="m-2" variant="primary">Copy link</Button>
        <Button className="m-2" variant="success" disabled={encounter === ""}>Generate ERT note</Button>
      </div>
    </div>
  );
}

export default App;
