import * as React from 'react';
import s from './styles.css';

const Ship1 = '/assets/images/main_page/ship-1.png';
const Ship2 = '/assets/images/main_page/ship-2.png';
const Ship3 = '/assets/images/main_page/ship-3.png';

export default class MainPage extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.topSection}>
        </div>
        <div className={s.startSection}>
        </div>
        <div className={s.bottomSection}>
          <div className={s.shipsContainer}>
            <div className={s.ship}>
              <div className={s.shipNumber}>1</div>
              <img className={s.shipImg} src={Ship1} />
            </div>
            <div className={s.ship}>
              <div className={s.shipNumber}>2</div>
              <img className={s.shipImg} src={Ship2} />
            </div>
            <div className={s.ship}>
              <div className={s.shipNumber}>3</div>
              <img className={s.shipImg} src={Ship3} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}