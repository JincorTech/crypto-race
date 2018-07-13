import * as React from 'react';
import Phaser from 'phaser';

import s from './styles.css';
import fns from './helpers';

const width = window.innerWidth;
const height = window.innerHeight;

const leftStartFrame = 11;
const leftEndFrame = 18;

const rightStartFrame = 1;
const rightEndFrame = 10;

const PlayerSpeed = 800;
const BgSpeed = 0.5;

const commonContext = {};


// test data
const player1 = {
  id: '0x0',
  owner: true,
  progress: 50,
  ship: {
    type: 'ship:omega'
  }
};

const player2 = {
  id: '0x1',
  owner: false,
  progress: 50,
  ship: {
    type: 'ship:nova'
  }
};
// /test data


function preload() {
  this.load.image('planet:moon', '/assets/game/planets/moon.png');
  this.load.image('planet:agebeeny', '/assets/game/planets2/agebeeny.png');
  this.load.image('planet:earth', '/assets/game/planets2/earth.png');
  this.load.image('planet:feros', '/assets/game/planets/feros.png');
  this.load.image('planet:illium', '/assets/game/planets2/illium.png');
  this.load.image('planet:noveria', '/assets/game/planets/noveria.png');
  this.load.image('planet:toontaw', '/assets/game/planets/toontaw.png');
  this.load.image('planet:tuchanka', '/assets/game/planets2/tuchanka.png');

  this.load.image('asteroid-1', '/assets/game/asteroids/asteroid-1.png');
  this.load.image('asteroid-2', '/assets/game/asteroids/asteroid-2.png');
  this.load.image('asteroid-3', '/assets/game/asteroids/asteroid-3.png');
  this.load.image('asteroid-4', '/assets/game/asteroids/asteroid-4.png');
  this.load.image('asteroid-5', '/assets/game/asteroids/asteroid-5.png');
  this.load.image('asteroid-6', '/assets/game/asteroids/asteroid-6.png');

  this.load.image('space', '/assets/game/background/space.jpg');
  this.load.image('hole', '/assets/game/background/hole.png');

  this.load.spritesheet('ship:nova', '/assets/game/ships/nova.png', { frameWidth: 130, frameHeight: 132 });
  this.load.spritesheet('ship:omega', '/assets/game/ships/omega.png', { frameWidth: 130, frameHeight: 132 });
}

function create() {
  this.enemies = this.physics.add.group();
  this.planets = this.add.group();

  this.backgroundSpace = this.add.tileSprite(0, 0, width, height, 'space').setOrigin(0);
  this.planets.agebeeny = this.add.tileSprite(0, 0, width, height, 'planet:agebeeny').setOrigin(0);
  this.planets.illium = this.add.tileSprite(0, 0, width, height, 'planet:illium').setOrigin(0);
  this.planets.tuchanka = this.add.tileSprite(0, 0, width, height, 'planet:tuchanka').setOrigin(0);
  this.planets.earth = this.add.tileSprite(0, 0, width, height, 'planet:earth').setOrigin(0);

  this.moon = this.add.tileSprite((width / 2) - 256, -256, 512, 512, 'planet:moon').setOrigin(0);

  const percHeight = (window.innerHeight - 256 - 130) / 100;

  fns.addPlayer(this, player1, percHeight, window.innerWidth);
  fns.addEnemy(this, player2, percHeight, window.innerWidth);

  //  Input Events
  commonContext.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (commonContext.cursors.left.isDown) {
    this.player.setVelocityX(-1 * PlayerSpeed);
    if (!this.player.anims.currentFrame || this.player.anims.currentAnim.key !== 'player_left' || this.player.anims.currentFrame.index < 8) {
      this.player.anims.play('player_left', true);
    } else {
      this.player.anims.stop('player_left');
    }
  } else if (commonContext.cursors.right.isDown) {
    this.player.setVelocityX(PlayerSpeed);
    if (!this.player.anims.currentFrame || this.player.anims.currentAnim.key !== 'player_right' || this.player.anims.currentFrame.index < 10) {
      this.player.anims.play('player_right', true);
    } else {
      this.player.anims.stop('player_right');
    }
  } else {
    this.player.setVelocityX(0);
    if (leftStartFrame < this.player.frame.name
      && this.player.frame.name <= leftEndFrame) {
      this.player.anims.play('player_left_back', true);
    } else if (rightStartFrame < this.player.frame.name
      && this.player.frame.name <= rightEndFrame) {
      this.player.anims.play('player_right_back', true);
    } else {
      this.player.anims.stop('player_left_back');
      this.player.anims.stop('player_right_back');
      this.player.setFrame(0);
    }
  }

  const getRandY = () => (Math.random() * (0.5 - 1.5)) + 1;
  const getRandX = () => (Math.random() * (0.01 - 0.1)) + 0.1;

  this.backgroundSpace.tilePositionY -= BgSpeed;
  this.planets.agebeeny.tilePositionY -= getRandY();
  this.planets.agebeeny.tilePositionX -= getRandX();
  this.planets.illium.tilePositionY -= getRandY();
  this.planets.illium.tilePositionX += getRandX();
  this.planets.tuchanka.tilePositionY -= getRandY();
  this.planets.tuchanka.tilePositionX -= getRandX();
  this.planets.earth.tilePositionY -= getRandY();
  this.planets.earth.tilePositionX += getRandX();
}

export default class GameContainer extends React.Component {
  _hangleWindowResize() {
    this.game.renderer.resize(window.innerWidth, window.innerHeight);
    this.game.events.emit('resize');
    console.log(window.innerWidth, window.innerHeight);
  }

  componentDidMount() {
    // init game
    this.game = new Phaser.Game({
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          debug: true
        }
      },
      parent: 'content',
      scene: { preload, create, update }
    });

    // add resize handler
    window.addEventListener('resize', this._hangleWindowResize.bind(this));
  }

  componentWillUnmount() {
    // destroy game
    if (window.game) {
      window.game.destroy();
    }

    // rm resize handler
    window.removeEventListener('resize', this._handleWindowResize.bind(this));
  }

  render() {
    return (
      <div className={s.container} id="content"></div>
    );
  }
}
