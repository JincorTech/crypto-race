import { getEmail } from '../../../../utils/auth';

const leftStartFrame = 16;
const leftEndFrame = 29;
const rightStartFrame = 1;
const rightEndFrame = 15;

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
