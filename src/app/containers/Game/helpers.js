import ships from './ships';


// player object
// {
//   id: '0x0',
//   owner: true,
//   position: { x: 0, y: 0 },
//   ship: 'ship:nova'
// }

// count Y axis from user % progress

function addPlayer(self, player, percHeight, width) {
  const positionY = (player.percent * percHeight) + 256 + 65;
  const positionX = width / 3;
  // const positionX = side - 65;
  self.player =
    self
      .physics
      .add
      .sprite(positionX, positionY, player.ship);
  self.player.setCollideWorldBounds(true);
  ships.createShipAnimation(self, player);
}

function addEnemy(self, player, percHeight, width) {
  const positionY = (player.percent * percHeight) + 256 + 65;
  // const side = (width - 130) / 3;
  const positionX = (width / 3) * 2;
  const _enemy =
    self
      .physics
      .add
      .sprite(positionX, positionY, player.ship);
  _enemy.id = player.id;
  self.enemies.add(_enemy);
  ships.createShipAnimation(self, player);
}

export default {
  addPlayer,
  addEnemy
};
