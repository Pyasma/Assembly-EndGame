import React from "react";

export function NewGame({ onNewGame }) {
  return (
    <div className="new-game">
      <button onClick={onNewGame} className="new-game-btn">
        Start New Game
      </button>
    </div>
  );
}
