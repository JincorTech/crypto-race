import React, { Component } from 'react';
import {VelocityComponent} from 'velocity-react';
import s from './styles.css';

const CoinImgs = [ 
  '/assets/images/main_page/crypto-1.png', 
  '/assets/images/main_page/crypto-2.png', 
  '/assets/images/main_page/crypto-3.png', 
  '/assets/images/main_page/crypto-4.png', 
  '/assets/images/main_page/crypto-5.png', 
  '/assets/images/main_page/crypto-6.png', 
  '/assets/images/main_page/crypto-7.png', 
  '/assets/images/main_page/crypto-8.png' 
]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

class MovingCoins extends Component {
  constructor(props) {
    super(props)

    this.id = 0;
    this.timer = null;

    this.state = {
      coins: []
    }
  }

  throwCoin = () => {
    const coinWidthMin = 15;
    const coinWidthMax = 40;
    const minDuration = 3500;
    const coinWidth = getRandomInt(coinWidthMin, coinWidthMax)
    this.setState((prevState) => ({
      coins: prevState.coins.concat({
        id: this.id++,
        img: CoinImgs[getRandomInt(0, CoinImgs.length)],
        x: getRandomInt(0, window.innerWidth - coinWidth - 50),
        width: coinWidth,
        duration: minDuration * coinWidthMax / coinWidth
      })
    }))
  }

  runCoins = () => {
    this.throwCoin();
    this.timer = setInterval(() => {
      this.throwCoin();
    }, 1000)
  }

  stopCoins = () => {
    clearInterval(this.timer)
  }

  handleVisibilityChange = () => {
    if (document.hidden) {
      this.stopCoins()
    } else  {
      this.runCoins()
    }
  }

  componentDidMount() {
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
    this.runCoins();
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      this.state.coins.map((coin) => {
        return (
          <VelocityComponent key={coin.id} animation={{top: 600, opacity: 0}} duration={coin.duration} runOnMount complete={() => {
            this.setState((prevState) => ({
              coins: prevState.coins.filter(oneCoin => oneCoin.id !== coin.id)
            }))
          }}>
            <img className={s.coin} src={coin.img} style={{left: `${coin.x}px`, top: `-${coin.width}px`, width: `${coin.width}px`}}/>
          </VelocityComponent>
        )
      })
    )
  }
}

export default MovingCoins