// TODO fix animation keys

const leftStartFrame = 30;
const leftEndFrame = 59;

const rightStartFrame = 0;
const rightEndFrame = 29;

const playerFrameRate = 60;

function getKey(player) {
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
    frameRate: playerFrameRate,
    repeat: -1
  });

  self.anims.create({
    key: getKey(player).leftBack,
    frames: self.anims.generateFrameNumbers(player.ship.type, {
      start: leftStartFrame, end: leftEndFrame
    }),
    frameRate: playerFrameRate,
    repeat: -1
  });

  self.anims.create({
    key: getKey(player).right,
    frames: self.anims.generateFrameNumbers(player.ship.type, {
      start: rightStartFrame, end: rightEndFrame
    }),
    frameRate: playerFrameRate,
    repeat: -1
  });

  self.anims.create({
    key: getKey(player).rightBack,
    frames: self.anims.generateFrameNumbers(player.ship.type, {
      start: rightStartFrame, end: rightEndFrame
    }),
    frameRate: playerFrameRate,
    repeat: -1
  });
}

export default {
  createShipAnimation
};
