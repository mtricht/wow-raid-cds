import { useEffect } from "react";
import classes from "./data/classes.json";
import cooldowns from "./data/cooldowns.json";

function CooldownList({ players, assignments, setAssignments, encounter, row }) {
  const addCooldown = (player, spellId) => {
    const newAssignments = JSON.parse(JSON.stringify(assignments));
    if (newAssignments[encounter] === undefined || newAssignments[encounter] === null) {
      newAssignments[encounter] = [];
    }
    if (newAssignments[encounter][row] === undefined || newAssignments[encounter][row] === null) {
      newAssignments[encounter][row] = [];
    } else if (newAssignments[encounter][row].filter(it => it.player === player && it.spellId === spellId).length > 0) {
      return;
    }
    newAssignments[encounter][row].push({player, spellId});
    setAssignments(newAssignments);
  }
  return (
    <>
      <h3>Available</h3>
      <table className="table table-dark table-striped" id="cooldown-list">
        <tbody>
          {players.map(player => cooldowns.filter(cooldown => cooldown.class === player.class).map(cooldown =>
            <tr key={player.name + cooldown.id} style={{cursor: "pointer"}}
              onClick={() => addCooldown(player.name, cooldown.id)}>
              <td>
                <a data-wowhead={`spell=${cooldown.id}`} href="#"
                  style={{ color: "#" + classes[player.class].color, marginLeft: "15px" }}>
                  {player.name}'s {cooldown.name}
                </a>
              </td>
              <td>
                <i className="fas fa-plus" />
              </td>
            </tr>))}
        </tbody>
      </table>

      <h3>On cooldown</h3>
      <table className="table table-dark table-striped" id="cooldown-list">
        <tbody>
          <tr>
            <td>Spells that are not available at this time will be displayed here. (TODO)</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default CooldownList;
