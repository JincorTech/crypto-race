import React, { Component } from 'react';
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
  render() {
    return (
      <div className={s.coin}>
        <img src={CoinImgs[0]}/>
      </div>
    )
  }
}

export default MovingCoins