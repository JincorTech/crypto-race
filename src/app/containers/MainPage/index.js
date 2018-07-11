import * as React from 'react';
import s from './styles.css';

const Ship1 = '/assets/images/main_page/ship-1.png';
const Ship2 = '/assets/images/main_page/ship-2.png';
const Ship3 = '/assets/images/main_page/ship-3.png';

export default class MainPage extends React.Component {
  renderShip = (image, number, text) => {
    return (
      <div className={s.shipContainer}>
        <div className={s.ship}>
          <div className={s.shipNumber}>{number}</div>
          <img className={s.shipImg} src={image} />
        </div>
        <div className={s.shipCaption}>{text}</div>
      </div>
    )
  }

  render() {
    return (
      <div className={s.container}>
        <div className={s.topSection}>
        </div>
        <div className={s.startSection}>
        </div>
        <div className={s.bottomSection}>
          <div className={s.shipsContainer}>
            {this.renderShip(Ship1, 1, 'SUPERZAP')}
            {this.renderShip(Ship2, 2, 'CRYPTOBOY')}
            {this.renderShip(Ship1, 3, 'VLADBITCOIN')}
          </div>
        </div>
      </div>
    )
  }
}