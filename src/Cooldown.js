import {Dropdown} from 'react-bootstrap';
import classes from "./classes.json";

function Cooldown({players, assignments, setAssignments}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary">
        <i class="fas fa-plus" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {players.map(player => classes[player.class].cooldowns.map(cooldown => 
        <Dropdown.Item data-wowhead={`spell=${cooldown.id}`}>{player.name}'s {cooldown.name}</Dropdown.Item>))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Cooldown;
