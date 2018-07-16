const leftStartFrame = 11;
const leftEndFrame = 18;
const rightStartFrame = 1;
const rightEndFrame = 10;

function getKey(player) {
  if (player.owner) {
    return {
      left: 'player_left',
      leftBack: 'player_left_back',
      right: 'player_right',
      rightBack: 'player_right_back'
    };
  }

  return {
    left: `${player.id}_left`,
    leftBack: `${player.id}_left_back`,
    right: `${player.id}_right`,
    rightBack: `${player.id}_right_back`
  };
}

function createShipAnimation(self, player) {
  self.anims.create({
    key: getKey(player).left,
    frames: self.anims.generateFrameNumbers(player.ship.type, {
      start: leftStartFrame, end: leftEndFrame
    }),
    frameRate: 30,
    repeat: -1
  });

  self.anims.create({
    key: getKey(player).leftBack,
    frames: self.anims.generateFrameNumbers(player.ship.type, {
      start: leftStartFrame, end: leftEndFrame
    }),
    frameRate: 30,
    repeat: 1
  });

  self.anims.create({
    key: getKey(player).right,
    frames: self.anims.generateFrameNumbers(player.ship.type, {
      start: rightStartFrame, end: rightEndFrame
    }),
    frameRate: 30,
    repeat: -1
  });

  self.anims.create({
    key: getKey(player).rightBack,
    frames: self.anims.generateFrameNumbers(player.ship.type, {
      start: rightStartFrame, end: rightEndFrame
    }),
    frameRate: 30,
    repeat: -1
  });
}

export default {
  createShipAnimation
};
