import { getEmail } from '../../../../utils/auth';
import ships from './ships';

const area = window.innerHeight - 180 - 130;
const percWidth = (window.innerWidth) / 100;

const getY = (pos, playersLen) => {
  const row = area / (playersLen + 1);
  return (row * (pos + 1)) + 180;
};

const spawnPlayers = (self, players) => {
  const spawnSinglePlayer = (player) => {
    const playerObject = self.physics.add.sprite(player.x * percWidth, getY(player.position, players.length), `ship${player.ship.type + 1}`);
    playerObject.id = player.id;
    playerObject.isPlayer = player.email === getEmail();
    playerObject.setCollideWorldBounds(true);
    self.players.add(playerObject);

    // const scoreObject = self.add.text((player.x * percWidth) + 75, getY(player.position, players.length), '+0%', { fontSize: '20px', fill: '#ffffff' });
    // scoreObject.id = player.id;
    // self.playersScores.add(scoreObject);

    ships.createShipAnimation(self, player);
  };

  players.map(spawnSinglePlayer);
};

const createScore = (self, players) => {
  const createSingleScore = (player) => {
    const scoreObject = self.add.text(
      (player.x * percWidth) + 75,
      getY(player.position, players.length),
      '+0%',
      { fontSize: '20px', fill: '#ffffff' }
    );
    scoreObject.id = player.id;
    self.playersScores.add(scoreObject);

    console.log(self.playersScores);
  };

  players.map(createSingleScore);
};

export default { spawnPlayers, createScore };
