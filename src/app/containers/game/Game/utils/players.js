import ships from './ships';

const spawnPlayers = (self, player, enemies, percentHight, percentWidth) => {
  const getY = (position) => (position === 0 ? (30 * percentHight) + 180 : (60 * percentHight) + 180);

  const spawnPlayer = (player) => {
    self.player = self.physics.add.sprite(player.x * percentWidth, getY(player.position), 'ship2');
    self.player.setCollideWorldBounds(true);
    self.player.id = player.id;
    ships.createShipAnimation(self, player);
  };

  const spawnEnemy = (enemy) => {
    const obj = self.physics.add.sprite(enemy.x * percentWidth, getY(enemy.position), 'omega');
    obj.id = enemy.id;
    obj.setCollideWorldBounds(true);
    self.enemies.add(obj);
    ships.createShipAnimation(self, enemy);
  };

  spawnPlayer(player);
  spawnEnemy(enemies);
};

export default {
  spawnPlayers
};
