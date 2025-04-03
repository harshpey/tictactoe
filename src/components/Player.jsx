import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [player, setPlayer] = useState("");


  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleInput(value) {
    setPlayer(value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            defaultValue={name}
            value={player}
            onChange={(e) => handleInput(e.target.value)}
            required
          />
        ) : (
          <span className="player-name">{player}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
