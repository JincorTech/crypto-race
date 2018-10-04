import React, { Component } from 'react';
import s from './styles.css';

const CUR_MOCK = {
  BTC: 10,
  ETH: 20,
  LTC: 30,
  XRP: 40,
  BCH: 50
};

class Currencies extends Component {
  render() {
    const { currencies, currenciesStart } = this.props;
    // const currencies = CUR_MOCK;
    // const currenciesStart = CUR_MOCK;

    if (!currencies || currencies.length === 0) {
      return null;
    }

    return (
      <div className={s.container}>
        {Object.getOwnPropertyNames(currencies).sort().map((ticker) => {
          const value = ((currencies[ticker] - currenciesStart[ticker]) / currencies[ticker] * 100).toFixed(2);
          return (
          <div className={s.item} key={ticker}>
            <img src={`/assets/images/game_icons/curr/${ticker.toLowerCase()}.png`}/>
            <span style={{ color: this.chooseColor(value) }}>{value}%</span>
          </div>
        )})}
      </div>
    );
  }

  chooseColor = (value) => {
    if (value > 0) {
      return '#05ef95';
    }

    if (value < 0) {
      return '#f00';
    }

    return '#fff';
  }
}

export default Currencies;
