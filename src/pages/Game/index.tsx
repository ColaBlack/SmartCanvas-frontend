import React from 'react';
import GameMain from '@/game/gameMain';

const Game: React.FC = () => {
  return (
    <div
      className="game-page"
      style={{
        margin: 0,
        padding: 0,
      }}
    >
      <GameMain />
    </div>
  );
};
export default Game;
