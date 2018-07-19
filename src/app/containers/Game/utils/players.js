import ships from './ships';

// count Y axis from user % progress

// const spawnSinglePlayer = (self, player, totalPlayers, percentHight, screenWidth) => {
//   console.log(player, self);
//   const x = screenWidth / (totalPlayers + 1);
//   const y = (player.progress * percentHight) + 256 + 65;
// };

const spawnPlayers = (self, players, percentHight, screenWidth) => {
  const spawn = (player, index, array) => {
    const totalPlayers = array.length;
    const x = (screenWidth / (totalPlayers + 1)) * (index + 1);
    const y = (player.progress * percentHight) + 256 + 65;

    if (player.owner) {
      self.player = self.physics.add.sprite(x, y, player.ship.type);
      self.player.setCollideWorldBounds(true);
      self.player.id = player.id;
      ships.createShipAnimation(self, player);
    } else {
      const enemy = self.physics.add.sprite(x, y, player.ship.type);
      enemy.id = player.id;
      self.enemies.add(enemy);
      ships.createShipAnimation(self, player);
    }
  };

  players.forEach(spawn);
};

function addPlayer(self, player, percHeight, width) {
  const positionY = (player.progress * percHeight) + 256 + 65;
  const positionX = width / 3;
  self.player =
    self
      .physics
      .add
      .sprite(positionX, positionY, player.ship.type);
  self.player.setCollideWorldBounds(true);
  ships.createShipAnimation(self, player);
}

function addEnemy(self, player, percHeight, width) {
  const positionY = (player.progress * percHeight) + 256 + 65;
  const positionX = (width / 3) * 2;
  const _enemy =
    self
      .physics
      .add
      .sprite(positionX, positionY, player.ship.type);
  _enemy.id = player.id;
  self.enemies.add(_enemy);
  ships.createShipAnimation(self, player);
}

export default {
  addPlayer,
  addEnemy,
  spawnPlayers
};
