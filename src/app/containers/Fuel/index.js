import * as React from 'react';
import s from './styles.css';
import Caption from 'components/Caption';

const FuelImg = '/assets/images/fuel/fuel.png';

export default class Fuel extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <Caption icon={FuelImg} text='CHOOSE FUEL'/>
      </div>
    )
  }
}