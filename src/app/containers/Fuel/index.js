import * as React from 'react';
import s from './styles.css';
import Caption from 'components/Caption';
import Indicator from 'components/Indicator';

const FuelImg = '/assets/images/fuel/fuel.png';

const Indicators = [
  {name: 'BITCOIN', color: '#fff', level: 30},
  {name: 'ETHERIUM', color: '#3df2a1', level: 50},
  {name: 'RIPPLE', color: '#42b6ef', level: 40},
  {name: 'BTC CASH', color: '#ffc122', level: 80},
  {name: 'LITECOIN', color: '#b7b9b8', level: 30},
  {name: 'RANDOM', color: '#ff4103', level: 40}
]

export default class Fuel extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <Caption icon={FuelImg} text='CHOOSE FUEL'/>
        <div className={s.indicators}>
          {Indicators.map((item) => (
            <div key={item.name} className={s.indicator}>
              <Indicator level={item.level} length={20} color={item.color} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}