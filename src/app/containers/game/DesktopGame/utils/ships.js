// TODO fix animation keys

const leftStartFrame = 30;
const leftEndFrame = 59;
const rightStartFrame = 0;
const rightEndFrame = 29;

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
    frames: self.anims.generateFrameNumbers(`ship${player.ship.type + 1}`, {
      start: leftStartFrame, end: leftEndFrame
    }),
    frameRate: 60,
    repeat: -1
  });

  self.anims.create({
    key: getKey(player).leftBack,
    frames: self.anims.generateFrameNumbers(`ship${player.ship.type + 1}`, {
      start: leftStartFrame, end: leftEndFrame
    }),
    frameRate: 60,
    repeat: 1
  });

  self.anims.create({
    key: getKey(player).right,
    frames: self.anims.generateFrameNumbers(`ship${player.ship.type + 1}`, {
      start: rightStartFrame, end: rightEndFrame
    }),
    frameRate: 60,
    repeat: -1
  });

  self.anims.create({
    key: getKey(player).rightBack,
    frames: self.anims.generateFrameNumbers(`ship${player.ship.type + 1}`, {
      start: rightStartFrame, end: rightEndFrame
    }),
    frameRate: 60,
    repeat: -1
  });
}

export default {
  createShipAnimation
};
