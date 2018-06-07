import * as React from 'react';
import s from './styles.css';

const ActiveItemPath = '/assets/images/user_info/indicator/active.png';
const InactiveItemPath = '/assets/images/user_info/indicator/inactive.png';

export default class HealthIndicator extends React.Component {
  render() {
    return (
      <div className={s.container}>
        {['','','',''].map(() => <img className={s.item} src={ActiveItemPath} />)}
        {['','','',''].map(() => <img className={s.item} src={InactiveItemPath} />)}
      </div>
    )
  }
}