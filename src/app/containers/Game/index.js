import * as React from 'react';
import Phaser from 'phaser'

import config from 'config'

import s from './styles.css';

const docElement = document.documentElement
const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

const screenWidth = 1024;
const screenHeight = 1024;

const leftStartFrame = 11;
const leftEndFrame = 18;

const rightStartFrame = 1;
const rightEndFrame = 10;

const PlayerSpeed = 800;
const PlayerRotationSpeed = 3;
const PlayerRotationAngle = 10;
const BgSpeed = 0.5;

const commonContext = {
};

function preload() {
  this.load.image('space', '/assets/game/background.jpg');
  this.load.image('moon', '/assets/game/MOON.png');
  this.load.image('bgComet1', '/assets/game/bg_comet_1.png');
  this.load.image('bgComet2', '/assets/game/bg_comet_2.png');
  this.load.image('bgComet3', '/assets/game/bg_comet_3.png');
  this.load.image('bgComet4', '/assets/game/bg_comet_4.png');

  this.load.spritesheet('ship1', '/assets/game/ship1.png', { frameWidth: 130, frameHeight: 132 });
}

function create() {
  this.bg = this.add.tileSprite(0, 0, screenWidth, screenHeight, 'space').setOrigin(0);
  this.bgMoon = this.add.tileSprite(screenWidth / 2 - 256, -256, 513, 512, 'moon').setOrigin(0);
  this.bgComet1 = this.add.tileSprite(0, 0, screenWidth, screenHeight, 'bgComet1').setOrigin(0);
  this.bgComet2 = this.add.tileSprite(0, 0, screenWidth, screenHeight, 'bgComet2').setOrigin(0);
  this.bgComet3 = this.add.tileSprite(0, 0, screenWidth, screenHeight, 'bgComet3').setOrigin(0);
  this.bgComet4 = this.add.tileSprite(0, 0, screenWidth, screenHeight, 'bgComet4').setOrigin(0);

  commonContext.player = this.physics.add.sprite(500, 700, 'ship1');
  // commonContext.player.setScale(0.2);
  commonContext.player.setCollideWorldBounds(true);

  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('ship1', { start: leftStartFrame, end: leftEndFrame }),
    frameRate: 30,
    repeat: -1
  });

  this.anims.create({
    key: 'left_back',
    frames: this.anims.generateFrameNumbers('ship1', { start: leftStartFrame, end: leftEndFrame }).reverse(),
    frameRate: 30,
    repeat: 1
  });

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('ship1', { start: rightStartFrame, end: rightEndFrame }),
    frameRate: 30,
    repeat: -1
  });

  this.anims.create({
    key: 'right_back',
    frames: this.anims.generateFrameNumbers('ship1', { start: rightStartFrame, end: rightEndFrame }).reverse(),
    frameRate: 30,
    repeat: -1
  });

  //  Input Events
  commonContext.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (commonContext.cursors.left.isDown) {
    commonContext.player.setVelocityX(-1 * PlayerSpeed);
    if (!commonContext.player.anims.currentFrame || commonContext.player.anims.currentAnim.key !== 'left' || commonContext.player.anims.currentFrame.index < 8) {
      commonContext.player.anims.play('left', true);
    } else {
      commonContext.player.anims.stop('left');
    }
  }
  else if (commonContext.cursors.right.isDown) {
    commonContext.player.setVelocityX(PlayerSpeed);
    if (!commonContext.player.anims.currentFrame || commonContext.player.anims.currentAnim.key !== 'right' || commonContext.player.anims.currentFrame.index < 10) {
      commonContext.player.anims.play('right', true);
    } else {
      commonContext.player.anims.stop('right');
    }
  } else {
    commonContext.player.setVelocityX(0);
    if (leftStartFrame < commonContext.player.frame.name && commonContext.player.frame.name <= leftEndFrame) {
      commonContext.player.anims.play('left_back', true);
    } else if (rightStartFrame < commonContext.player.frame.name && commonContext.player.frame.name <= rightEndFrame) {
      commonContext.player.anims.play('right_back', true);
    } else {
      commonContext.player.anims.stop('left_back');
      commonContext.player.anims.stop('right_back');
      commonContext.player.setFrame(0);
    }
  }

  this.bg.tilePositionY -= BgSpeed;
  this.bgComet1.tilePositionY -= 2;
  this.bgComet1.tilePositionX -= 0.02;
  this.bgComet2.tilePositionY -= 3;
  this.bgComet2.tilePositionX += 0.04;
  this.bgComet3.tilePositionY -= 1;
  this.bgComet3.tilePositionX -= 0.03;
  this.bgComet4.tilePositionY -= 4;
  this.bgComet4.tilePositionX += 0.02;
}

export default class GameContainer extends React.Component {
  componentDidMount() {
    window.game = new Phaser.Game({
      type: Phaser.AUTO,
      width: width,
      height: height,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          debug: false
        }
      },
      parent: 'content',
      scene: {
        preload: preload,
        create: create,
        update: update
      }
    })
  }

  render() {
    return (
      <div className={s.container} id="content"></div>
    )
  }
}