import { getEmail } from '../../../../utils/auth';
import ships from './ships';

const spawnPlayers = (self, players) => {
  const spawnSinglePlayer = (player) => {
    const playerObject = self.physics.add.sprite(player.x, 100, 'ship1');
    playerObject.id = player.id;
    playerObject.isPlayer = player.email === getEmail();

    self.players.add(playerObject);
    self.players.children.get('id', player.id).setCollideWorldBounds(true);

    ships.createShipAnimation(self, player);
  };

  players.map(spawnSinglePlayer);
};

export default { spawnPlayers };
