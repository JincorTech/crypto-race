import ships from './ships';

const spawnPlayers = (self, player, enemies, percentHight) => {
  const getY = (position) => (position === 0 ? 30 * percentHight : 60 * percentHight);

  const spawnPlayer = (player) => {
    self.player = self.physics.add.sprite(player.x, getY(player.position), player.ship.type);
    self.player.setCollideWorldBounds(true);
    self.player.id = player.id;
    ships.createShipAnimation(self, player);
  };

  const spawnEnemy = (enemy) => {
    const obj = self.physics.add.sprite(enemy.x, getY(enemy.position), enemy.ship.type);
    obj.id = enemy.id;
    self.enemies.add(obj);
    ships.createShipAnimation(self, enemy);
  };

  spawnPlayer(player);
  spawnEnemy(enemies);
};

export default {
  spawnPlayers
};
