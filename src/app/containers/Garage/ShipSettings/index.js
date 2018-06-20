import * as React from 'react';
// import cx from 'classnames';
import s from './styles.css';

import Indicator from 'components/Indicator';
import Caption from 'components/Caption';
import ColorPicker from './ColorPicker';
import UpgradesPicker from './UpgradesPicker';
import ShipCarousel from './ShipCarousel';

const CapacityIcon = '/assets/images/ship_settings/capacity.png';
const PumpIcon = '/assets/images/ship_settings/pump.png';
const PriceIcon = '/assets/images/ship_settings/price.png';
const ShopShip = '/assets/images/shop/ship.png';

export default class ShipSettings extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.column}>
          <Caption text='TUNING'/>
          <div className={s.capacity}>
            <div className={s.name}>
              <img className={s.indicatorIcon} src={CapacityIcon} />
              <span className={s.indicatorCaption}>CAPACITY</span>
            </div>
            <div className={s.value}>
              <Indicator level={3} length={13} color="#39ef99" />
              <span className={s.indicatorLevel}>30</span>
            </div>
          </div>
          <div className={s.pump}>
            <div className={s.name}>
              <img className={s.indicatorIcon} src={PumpIcon} />
              <span className={s.indicatorCaption}>PUMP LVL</span>
            </div>
            <div className={s.value}>
              <Indicator level={8} length={13} color="#35baeb" />
              <span className={s.indicatorLevel}>80</span>
            </div>
          </div>
          <div className={s.price}>
            <div className={s.name}>
              <img className={s.indicatorIcon} src={PriceIcon} />
              <span className={s.indicatorCaption}>PRICE</span>
            </div>
            <div className={s.value}>
              <Indicator level={4} length={13} color="#ffc50a" />
              <span className={s.indicatorLevel}>30</span>
            </div>
          </div>
          <ColorPicker />
          <UpgradesPicker />
        </div>
        <div className={s.column}>
          <Caption text='YOUR SHIP'/>
          <ShipCarousel />
        </div>
        <div className={s.column}>
          <Caption text='SHOP'/>
          <div className={s.shopShipCaption}>TURBORACER 30000</div>
          <img className={s.shopShip} src={ShopShip} />
          <div className={s.shopButton}>SHOP</div>
        </div>
      </div>
    )
  }
}