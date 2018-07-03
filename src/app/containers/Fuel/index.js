import * as React from 'react';
import s from './styles.css';
import Caption from 'components/Caption';
import Indicator from 'components/Indicator';
import Button from 'components/Button';
import routes from 'routes';

const FuelImg = '/assets/images/fuel/fuel.png';
const ShipImg = '/assets/images/fuel/ship.png';

const Indicators = [
  { name: 'BITCOIN', thumbClass: 'btc', color: '#fff', level: 30 },
  { name: 'ETHERIUM', thumbClass: 'eth', color: '#3df2a1', level: 50 },
  { name: 'RIPPLE', thumbClass: 'rpl', color: '#42b6ef', level: 40 },
  { name: 'BTC CASH', thumbClass: 'bcc', color: '#ffc122', level: 80 },
  { name: 'LITECOIN', thumbClass: 'ltc', color: '#b7b9b8', level: 30 },
  { name: 'RANDOM', thumbClass: 'rnd', color: '#ff4103', level: 40 }
]

export default class Fuel extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <Caption icon={FuelImg} text='CHOOSE FUEL' />
        <div className={s.body}>
          <div className={s.indicators}>
            {Indicators.map((item) => (
              <div key={item.name} className={s.indicator}>
                <Indicator isInput thumbClass={item.thumbClass} name={item.name} level={item.level} length={20} color={item.color} />
              </div>
            ))}
            <div className={s.text}>
              sdfsd sdfsdf dfs dfs dfs dfsdfsdfs dsdfs dfsdfsdfs sdfsdfsdfs sdfsdfsdfs dfs dfsd fsdf sdfsd
            </div>
            <div className={s.buttons}>
              <div className={s.addButton}>
                <Button text="+ADD" color="#3593eb" />
              </div>
              <Button to={routes.game} text="2THEMOON" color="#ed1c24" />
            </div>
          </div>
          <img className={s.ship} src={ShipImg} />
        </div>
      </div>
    )
  }
}