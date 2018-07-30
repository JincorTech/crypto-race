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
    const playerObject = self.physics.add.sprite(player.x * percWidth, getY(player.position, players.length), 'ship1');
    playerObject.id = player.id;
    playerObject.isPlayer = player.email === getEmail();

    self.players.add(playerObject);
    self.players.children.get('id', player.id).setCollideWorldBounds(true);

    ships.createShipAnimation(self, player);
  };

  players.map(spawnSinglePlayer);
};

export default { spawnPlayers };
