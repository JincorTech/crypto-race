import * as React from 'react';
import cx from 'classnames';
import Slider from 'react-slick';
import s from './styles.css';

const PlaceImg = '/assets/images/your_ship/place.png';
const ShipImg = '/assets/images/your_ship/ship.gif';
const ArrowLeftImg = '/assets/images/your_ship/arrow_left.png';
const ArrowRightImg = '/assets/images/your_ship/arrow_right.png';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img className={cx(s.arrow, s.arrowRight)} src={ArrowRightImg} onClick={onClick}/>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img className={cx(s.arrow, s.arrowLeft)} src={ArrowLeftImg} onClick={onClick}/>
  );
}

const ShipCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const ships = [
    ShipImg,
    ShipImg,
    ShipImg,
  ]

  return (
    <div className={s.container}>
      <img className={s.place} src={PlaceImg} />
      <Slider {...settings}>
        {ships.map((ship, index) => (
          <div key={index} className={s.item}>
            <img className={s.ship} src={ship} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ShipCarousel;