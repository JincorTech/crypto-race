import React, { Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import Slider from 'react-slick';
import { ships } from '../../../ships';
import { setupShip } from '../../../redux/modules/garage/setup';
import s from './styles.css';

const PlaceImg = '/assets/images/your_ship/place.png';
const ArrowLeftImg = '/assets/images/your_ship/arrow_left.png';
const ArrowRightImg = '/assets/images/your_ship/arrow_right.png';


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


class ShipCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carousel: 3
    };
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow/>,
      beforeChange: (current, next) => this.setState({ carousel: next })
    };

    const { setupShip, setup } = this.props;

    const renderButton = () => {
      if (this.state.carousel === this.props.setup) return null;

      return <button type="button" className={s.selectButton} onClick={() => setupShip(this.state.carousel)}>Select</button>;
    };

    return (
      <div className={s.container} id="joyride-garage-1">
        <img className={s.place} src={PlaceImg} />
        <Slider {...settings}>
          {ships.map((ship, index) => (
            <div key={index} className={s.item}>
              <img className={cx(s.ship, s[getClassNameByIndex(index)])} src={ship} />
            </div>
          ))}
        </Slider>
        <div className={s.selectButtonWrapper}>
          {renderButton()}
        </div>
      </div>
    );
  }
}


export default connect(
  (state) => ({
    setup: state.garage.setup
  }),
  {
    setupShip
  }
)(ShipCarousel);
