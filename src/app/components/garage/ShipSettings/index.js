import * as React from 'react';
import cx from 'classnames';
import s from './styles.css';

import Indicator from '../../common/Indicator';
import Caption from '../../common/Caption';
import ColorPicker from '../ColorPicker';
import UpgradesPicker from '../UpgradesPicker';
import ShipCarousel from '../ShipCarousel';

const CapacityIcon = '/assets/images/ship_settings/capacity.png';
const PumpIcon = '/assets/images/ship_settings/pump.png';
const PriceIcon = '/assets/images/ship_settings/price.png';
const ShopShip = '/assets/images/shop/ship.png';

const ShipSettings = () => (
  <div className={s.container}>
    <div className={cx(s.column, s.disabled)}>
      <Caption text='TUNING' />
      <Indicator name="CAPACITY" level={30} length={13} color="#39ef99"
        icon={CapacityIcon} />
      <Indicator name="PUMP LVL" level={80} length={13} color="#35baeb"
        icon={PumpIcon} />
      <div className={s.price}>
        <Indicator name="PRICE" level={40} length={13} color="#ffc50a"
          icon={PriceIcon} />
      </div>
      <ColorPicker />
      <UpgradesPicker />
    </div>
    <div className={cx(s.column, s.yourShip)}>
      <Caption text='YOUR SHIP'/>
      <ShipCarousel />
    </div>
    <div className={cx(s.column, s.disabled)}>
      <Caption text='SHOP'/>
      <div className={s.shopShipCaption}>TURBORACER 30000</div>
      <img className={s.shopShip} src={ShopShip} />
      <div className={s.shopButton}>SHOP</div>
    </div>
  </div>
);

export default ShipSettings;
