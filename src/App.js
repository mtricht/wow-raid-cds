import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import RaidSetup from './RaidSetup';
import bosses from './data/castle_nathria.json';
import cooldowns from './data/cooldowns.json';
import {Button, Overlay, Tooltip} from 'react-bootstrap';
import CooldownList from './CooldownList';

const secondsToHHMM = seconds => new Date(seconds * 1000).toISOString().substr(14, 5);
const getCooldown = spellId => cooldowns.filter(it => it.id === spellId)[0];

const generateERT = (encounter, assignments) => {
  const ertNote = encounter.map((ability, index) => {
    let abilityText = `{time:${secondsToHHMM(ability.time)}}: {spell:${ability.id}}|cff${ability.color}${ability.name}|r - `;
    if (assignments === undefined || assignments === null || assignments[index] === undefined || 
      assignments[index] === null || assignments[index].length === 0) {
      return abilityText;
    }
    abilityText += " " + (assignments[index].map(assignment => {
      return `${assignment.player === "" ? "Everyone" : assignment.player} {spell:${assignment.spellId}}`;
    }).join(" + "));
    return abilityText;
  });
  navigator.clipboard.writeText(ertNote.join("\n"));
};

const getEncounterRows = abilities => {
  return abilities.flatMap(ability => ability.timers.map((abilityTime, index) => ({
    id: ability.id,
    time: abilityTime,
    name: `${ability.name} ${index + 1}`,
    color: ability.color
  })))
  .sort((a, b) => a.time - b.time);
};

function App() {
  useEffect(() => window.$WowheadPower.refreshLinks());
  const [players, setPlayers] = useState([]);
  const [encounter, setEncounter] = useState("");
  const [assignments, setAssignments] = useState({});
  const [selectedRow, setSelectedRow] = useState(0);
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const removeAssignment = (row, index) => {
    const newAssignments = JSON.parse(JSON.stringify(assignments));
    newAssignments[encounter][row].splice(index, 1);
    setAssignments(newAssignments);
  };
  const handleGenerateERT = () => {
    setShow(true);
    generateERT(getEncounterRows(bosses[encounter].abilities), assignments[encounter]);
    setTimeout(() => setShow(false), 2500);
  };
  const changeEncounter = encounter => {
    setEncounter(encounter);
    setSelectedRow(0);
  };
  return (
    <div className="container">
    <div className="row">
      <RaidSetup players={players} setPlayers={setPlayers} />
      <div className="col-6">
        <select value={encounter} className="form-control mb-2 mr-sm-2" style={{width: "300px"}}
          onChange={event => changeEncounter(event.target.value)}>
          <option value="">Select encounter</option>
          {Object.keys(bosses).map(boss => <option key={boss} value={boss}>{bosses[boss].name}</option>)}
        </select>
        {encounter !== "" && <>
        <table className="table table-dark table-striped" id="assignments">
          <thead>
            <tr>
              <th>Time</th>
              <th>Ability</th>
              <th width="70%">Assignment(s)</th>
            </tr>
          </thead>
          <tbody>
            {getEncounterRows(bosses[encounter].abilities).map((ability, index) => <tr key={ability.time + ability.name}
              className={index === selectedRow ? "table-info" : ""}
              onClick={() => setSelectedRow(index)}
              style={{cursor: "pointer"}}>
              <td>{secondsToHHMM(ability.time)}</td>
              <td><a href="#" data-wowhead={`spell=${ability.id}`}>{ability.name}</a></td>
              <td>
                {assignments[encounter] && assignments[encounter][index] &&
                  assignments[encounter][index].map((assignment, assignmentIndex) => <div key={assignment.player + assignment.spellId}>
                  <a href="#" data-wowhead={`spell=${assignment.spellId}`}></a>&nbsp;{assignment.player}{assignment.player !== "" ? "'s" : ""}&nbsp;
                  {getCooldown(assignment.spellId).name}&nbsp;
                  &nbsp;<i className="fas fa-times" id="trash" onClick={() => removeAssignment(index, assignmentIndex)} />
                </div>)}
              </td>
            </tr>)}
          </tbody>
        </table>
        <Button className="m-2" variant="success" onClick={handleGenerateERT} ref={target}>Generate ERT note</Button>
        <Overlay target={target.current} show={show} placement="right">
          {(props) => (
            <Tooltip {...props}>
              Copied ERT note
            </Tooltip>
          )}
        </Overlay>
      </>}
      </div>
      <div className="col-3">
        {encounter !== "" && <CooldownList players={players} assignments={assignments} setAssignments={setAssignments}
          encounter={encounter} row={selectedRow} />}
      </div>
    </div>
    </div>
  );
}

export default App;
