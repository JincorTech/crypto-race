import * as React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import s from './styles.css';
import Caption from '../../../components/fuel/Caption';
import Indicator from '../../../components/common/Indicator';
import Button from '../../../components/common/Button';
import Avatar from '../../../components/common/Avatar';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';

const FuelImg = '/assets/images/fuel/fuel.png';
const ShipImg = '/assets/images/fuel/ship.png';
// const StationImg = '/assets/images/fuel/station.png';
const MoonImg = '/assets/images/fuel/moon.png';

const Indicators = [
  { name: 'BITCOIN', thumbClass: 'btc', color: '#fff', level: 30 },
  { name: 'ETHEREUM', thumbClass: 'eth', color: '#3df2a1', level: 50 },
  { name: 'RIPPLE', thumbClass: 'rpl', color: '#42b6ef', level: 40 },
  { name: 'BTC CASH', thumbClass: 'bcc', color: '#ffc122', level: 80 },
  { name: 'LITECOIN', thumbClass: 'ltc', color: '#b7b9b8', level: 30 },
  { name: 'RANDOM', thumbClass: 'rnd', color: '#ff4103', level: 40 }
];

class Fuel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      levels: [0, 0, 0, 0, 0, 0]
    }
  }

  getTotal = (levels) => {
    return levels.reduce((acc, current) => acc + current, 0);
  }

  handleChangeIndicator = (value, index) => {
    const { levels } = this.state;
    levels[index] = +value;

    const newTotal = this.getTotal(levels);

    if (newTotal <= 100) {
      this.setState({ levels });
    } else {
      levels[index] = 100 - (newTotal - +value);
      this.setState({ levels });
    }
  }

  _joinTrack = () => {
    const joinData = {
      trackId: queryString.parse(this.props.location.search).trackId,
      fuel: this.state.levels,
      ship: this.props.ship
    };

    window.socket.emit('joinTrack', joinData);
  }

  render() {
    const {
      levels
    } = this.state;

    return (
      <React.Fragment>
        <Header />
        <div className={s.container}>
          <Caption icon={FuelImg} text='CHOOSE FUEL' />
          <div className={s.avatarContainer}>
            <Avatar />
            <div className={s.avatarText}>
              Fill your tank and go to the moon!
          </div>
          </div>
          <div className={s.body}>
            <div className={s.indicators}>
              {Indicators.map((item, index) => (
                <div key={item.name} className={s.indicator}>
                  <Indicator isInput units="%" onChange={(value) => this.handleChangeIndicator(value, index)} thumbClass={item.thumbClass} name={item.name} level={levels[index]} length={20} color={item.color} />
                </div>
              ))}
              <div className={s.totalIndicator}>
                <Indicator units="%" name={'TOTAL'} level={100 - this.getTotal(levels)} length={20} color={'#fff'} />
              </div>
              {/* <div className={s.text}>
              Fill your ship
            </div> */}
              <div className={s.buttons}>
                {/* <div className={s.addButton}>
                <Button text="+ADD" color="#3593eb" />
              </div> */}
                <Button text="2THEMOON" color="#ed1c24" onClick={() => this._joinTrack()} />
              </div>
            </div>
            <img className={s.ship} src={ShipImg} />
            {/* <img className={s.station} src={StationImg} /> */}
            <img className={s.moon} src={MoonImg}/>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default connect((state) => ({ ship: state.garage.setup }))(Fuel);
