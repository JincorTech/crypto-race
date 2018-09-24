import React, { Component } from 'react';
import s from './styles.css';

class Currencies extends Component {
  render() {
    const { currencies, currenciesStart } = this.props;

    if (!currencies || currencies.length === 0) {
      return null;
    }

    return (
      <div className={s.container}>
        {Object.getOwnPropertyNames(currencies).sort().map((ticker) => {
          const value = ((currencies[ticker] - currenciesStart[ticker]) / currencies[ticker] * 100).toFixed(2);
          return (
          <div className={s.item} key={ticker}>
            <span className={s.label}>{ticker}: </span>
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
