import * as React from 'react';
import cx from 'classnames';
import s from './styles.css';

const PlaceImg = '/assets/images/your_ship/place.png';
const ShipImg = '/assets/images/your_ship/ship.png';
const ArrowLeftImg = '/assets/images/your_ship/arrow_left.png';
const ArrowRightImg = '/assets/images/your_ship/arrow_right.png';

export default class ShipCarousel extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <img className={s.place} src={PlaceImg} />
        <img className={s.ship} src={ShipImg} />
        <img className={s.arrowLeft} src={ArrowLeftImg} />
        <img className={s.arrowRight} src={ArrowRightImg} />
        <div className={s.pages}>
          <div className={cx(s.pageItem, s.active)} />
          <div className={s.pageItem} />
          <div className={s.pageItem} />
        </div>
      </div>
    )
  }
}