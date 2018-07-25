import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import Slider from 'react-slick';
import { setupShip } from '../../../redux/modules/garage/setup';
import s from './styles.css';

const PlaceImg = '/assets/images/your_ship/place.png';
const ArrowLeftImg = '/assets/images/your_ship/arrow_left.png';
const ArrowRightImg = '/assets/images/your_ship/arrow_right.png';

const Ship1Img = '/assets/images/your_ship/ship-1.gif';
const Ship2Img = '/assets/images/your_ship/ship-2.gif';
const Ship3Img = '/assets/images/your_ship/ship-3.gif';
const Ship4Img = '/assets/images/your_ship/ship-4.gif';
const Ship5Img = '/assets/images/your_ship/ship-5.gif';
const Ship6Img = '/assets/images/your_ship/ship-6.gif';
const Ship7Img = '/assets/images/your_ship/ship-7.gif';

function getClassNameByIndex(index) {
  return `ship${index}`;
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <img className={cx(s.arrow, s.arrowRight)} src={ArrowRightImg} onClick={onClick}/>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <img className={cx(s.arrow, s.arrowLeft)} src={ArrowLeftImg} onClick={onClick}/>
  );
}

const ShipCarousel = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    beforeChange: (current, next) => props.setupShip(next)
  };

  const ships = [
    Ship7Img,
    Ship5Img,
    Ship6Img,
    Ship1Img,
    Ship2Img,
    Ship3Img,
    Ship4Img
  ];

  return (
    <div className={s.container}>
      <img className={s.place} src={PlaceImg} />
      <Slider {...settings}>
        {ships.map((ship, index) => (
          <div key={index} className={s.item}>
            <img className={cx(s.ship, s[getClassNameByIndex(index)])} src={ship} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default connect(
  null,
  {
    setupShip
  }
)(ShipCarousel);
