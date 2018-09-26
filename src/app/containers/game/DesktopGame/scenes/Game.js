import Phaser from 'phaser';
import isEqual from 'deep-equal';

import players from '../utils/_players';
import { getEmail } from '../../../../utils/auth';

const leftStartFrame = 30;
const leftEndFrame = 59;
const rightStartFrame = 0;
const rightEndFrame = 29;

const PlayerSpeed = 400;
const BgSpeed = 1.5;

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' });

    this.state = {
      id: '',
      left: false,
      right: false,
      x: 23,
      trackId: ''
    };

    this.commonContext = {};
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  preload() {
    this.load.image('planet:moon', '/assets/game/planets/moon.png');
    this.load.image('planet:agebeeny', '/assets/game/planets2/agebeeny.png');
    this.load.image('planet:earth', '/assets/game/planets2/earth.png');
    this.load.image('planet:feros', '/assets/game/planets/feros.png');
    this.load.image('planet:illium', '/assets/game/planets2/illium.png');
    this.load.image('planet:noveria', '/assets/game/planets/noveria.png');
    this.load.image('planet:toontaw', '/assets/game/planets/toontaw.png');
    this.load.image('planet:tuchanka', '/assets/game/planets2/tuchanka.png');
    this.load.image('planet:planet1', '/assets/game/planets3/planet1.png');
    this.load.image('planet:planet2', '/assets/game/planets3/planet2.png');
    this.load.image('planet:planet3', '/assets/game/planets3/planet3.png');

    this.load.image('asteroid-1', '/assets/game/asteroids/asteroid-1.png');
    this.load.image('asteroid-2', '/assets/game/asteroids/asteroid-2.png');
    this.load.image('asteroid-3', '/assets/game/asteroids/asteroid-3.png');
    this.load.image('asteroid-4', '/assets/game/asteroids/asteroid-4.png');
    this.load.image('asteroid-5', '/assets/game/asteroids/asteroid-5.png');
    this.load.image('asteroid-6', '/assets/game/asteroids/asteroid-6.png');

    this.load.image('space', '/assets/game/background/space4.png');
    this.load.image('space2', '/assets/game/background/space3-1.png');
    this.load.image('space3', '/assets/game/background/space3-2.png');
    this.load.image('hole', '/assets/game/background/hole.png');

    this.load.spritesheet('ship1', 'assets/game/ships/ship1.png', { frameWidth: 130, frameHeight: 133 });
    this.load.spritesheet('ship2', 'assets/game/ships/ship2.png', { frameWidth: 130, frameHeight: 133 });
    this.load.spritesheet('ship3', 'assets/game/ships/ship3.png', { frameWidth: 130, frameHeight: 84 });
    this.load.spritesheet('ship4', 'assets/game/ships/ship4.png', { frameWidth: 130, frameHeight: 141 });
  }

  create(data) {
    this.players = this.physics.add.group();
    this.playersScores = this.add.group();
    this.planets = this.add.group();

    this.backgroundSpace = this.add.tileSprite(0, 0, this.screenWidth, this.screenHeight, 'space').setOrigin(0);
    this.backgroundSpace2 = this.add.tileSprite(0, 0, this.screenWidth, this.screenHeight, 'space2').setOrigin(0);
    this.backgroundSpace3 = this.add.tileSprite(0, 0, this.screenWidth, this.screenHeight, 'space3').setOrigin(0);
    this.planets.agebeeny = this.add.tileSprite(0, 0, this.screenWidth, this.screenHeight, 'planet:agebeeny').setOrigin(0);
    this.planets.illium = this.add.tileSprite(0, 0, this.screenWidth, this.screenHeight, 'planet:illium').setOrigin(0);
    this.planets.tuchanka = this.add.tileSprite(0, 0, this.screenWidth, this.screenHeight, 'planet:tuchanka').setOrigin(0);
    this.planets.earth = this.add.tileSprite(0, 0, this.screenWidth, this.screenHeight, 'planet:earth').setOrigin(0);
    this.planets.planet1 = this.add.tileSprite(0, 0, this.screenWidth, this.screenHeight, 'planet:planet1').setOrigin(0);
    this.planets.planet2 = this.add.tileSprite(0, 0, this.screenWidth, this.screenHeight, 'planet:planet2').setOrigin(0);
    this.planets.planet3 = this.add.tileSprite(0, 0, this.screenWidth, this.screenHeight, 'planet:planet3').setOrigin(0);
    this.moon = this.add.tileSprite((this.screenWidth / 2) - 180, -180, 360, 360, 'planet:moon').setOrigin(0);

    players.spawnPlayers(this, data.players);
    players.createScore(this, data.players);

    //  Input Events
    this.commonContext.cursors = this.input.keyboard.createCursorKeys();

    this.state.id = data.players.filter((player) => player.email === getEmail())[0].id;
    this.state.trackId = data.trackId;

    window.socket.on('moveXupdate', (data) => {
      const player = this.players.children.get('id', data.id);
      // const playerScore = this.playersScores.children.get('id', data.id);

      // console.log(playerScore);

      // TODO fix animation keys

      if (data.left) {
        player.setVelocityX(-1 * PlayerSpeed);
        // playerScore.x = player.x + 75;

        if (!player.anims.currentFrame || player.anims.currentAnim.key !== `${player.id}_left` || player.anims.currentFrame.index < 29) {
          player.anims.play(`${player.id}_left`, true);
        } else {
          player.anims.stop(`${player.id}_left`);
        }
      } else if (data.right) {
        player.setVelocityX(PlayerSpeed);
        // playerScore.x = player.x + 75;

        if (!player.anims.currentFrame || player.anims.currentAnim.key !== `${player.id}_right` || player.anims.currentFrame.index < 29) {
          player.anims.play(`${player.id}_right`, true);
        } else {
          player.anims.stop(`${player.id}_right`);
        }
      } else {
        player.setVelocityX(0);
        // playerScore.x = player.x + 75;

        // if (leftStartFrame < player.frame.name && player.frame.name <= leftEndFrame) {
        //   player.anims.play(`${player.id}_left_back`, true);
        // } else if (rightStartFrame < player.frame.name && player.frame.name <= rightEndFrame) {
        //   player.anims.play(`${player.id}_right_back`, true);
        // } else {
        //   player.anims.stop(`${player.id}_left_back`);
        //   player.anims.stop(`${player.id}_right_back`);
        player.setFrame(0);
        player.anims.stop(`${player.id}_right`);
        player.anims.stop(`${player.id}_left`);
        // }
      }
    });

    window.socket.on('positionUpdate', (data) => {
      const area = window.innerHeight - 180 - 130;

      const getY = (pos, playersLen) => {
        const row = area / (playersLen + 1);
        return (row * (pos + 1)) + 180;
      };

      data.forEach((p) => {
        const player = this.players.children.get('id', p.id);
        const playerScore = this.playersScores.children.get('id', p.id);
        const targetPosition = getY(p.position, data.length);

        this.tweens.add({
          targets: [player, playerScore],
          y: targetPosition,
          ease: 'Power1',
          duration: 2000,
          repeat: 0
        });
      });
    });
  }

  update() {
    const newState = {
      id: this.state.id,
      left: false,
      right: false,
      x: 23,
      trackId: this.state.trackId
    };

    if (this.commonContext.cursors.left.isDown) {
      newState.left = true;
      newState.right = false;
    } else if (this.commonContext.cursors.right.isDown) {
      newState.left = false;
      newState.right = true;
    } else {
      newState.left = false;
      newState.right = false;
    }

    if (!isEqual(this.state, newState)) {
      this.state.left = newState.left;
      this.state.right = newState.right;
      window.socket.emit('moveX', this.state);
    }

    // console.log(this.players.children);

    this.players.children.entries.forEach((player) => {
      const ownScore = this.playersScores.children.get('id', player.id);

      ownScore.x = player.x + 75;
    });

    const getRandY = () => (Math.random() * (0.5 - 1.5)) + 1;
    const getRandX = () => (Math.random() * (0.01 - 0.1)) + 0.1;

    this.backgroundSpace.tilePositionY -= BgSpeed;
    this.backgroundSpace2.tilePositionY -= BgSpeed * 1.5;
    this.backgroundSpace3.tilePositionY -= BgSpeed * 2;
    this.planets.agebeeny.tilePositionY -= getRandY();
    this.planets.agebeeny.tilePositionX -= getRandX();
    this.planets.illium.tilePositionY -= getRandY();
    this.planets.illium.tilePositionX += getRandX();
    this.planets.tuchanka.tilePositionY -= getRandY();
    this.planets.tuchanka.tilePositionX -= getRandX();
    this.planets.earth.tilePositionY -= getRandY();
    this.planets.earth.tilePositionX += getRandX();
    this.planets.planet1.tilePositionY -= getRandY();
    this.planets.planet1.tilePositionX -= getRandX();
    this.planets.planet2.tilePositionY -= getRandY();
    this.planets.planet2.tilePositionX -= getRandX();
    this.planets.planet3.tilePositionY -= getRandY();
    this.planets.planet3.tilePositionX -= getRandX();
  }
}
