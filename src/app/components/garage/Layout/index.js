import * as React from 'react';

import Joyride from 'react-joyride';

import User from '../../../containers/garage/User';
import ShipSettings from '../ShipSettings';
import Races from '../../../containers/garage/Races';
import TourTip from '../../../components/garage/TourTip';

import { completeTour, isTourCompleted } from '../../../utils/tour';
import s from './styles.css';

const stepStyle = {
  options: {
    arrowColor: 'transparent',
    zIndex: 100
  }
};

export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      run: false,
      steps: [
        {
          target: '#joyride-garage-1',
          content: 'Select your ship!',
          styles: stepStyle
        },
        {
          target: '#joyride-garage-2',
          content: 'Select the race!',
          placement: 'top',
          styles: stepStyle
        }
      ]
    };
  }

  componentDidMount() {
    this.setState({ run: true });
  }

  callback(data) {
    if (data.status === 'skipped' || data.status === 'finished') {
      completeTour();
    }
  }

  render() {
    return (
      <div className={s.container}>
        <div className={s.userContainer}>
          <User />
        </div>
        <div className={s.shipSettingsContainer}>
          <ShipSettings />
        </div>
        <div className={s.racesContainer}>
          <Races />
        </div>

        {!isTourCompleted() &&
          <Joyride
            steps={this.state.steps}
            run={this.state.run}
            callback={this.callback}
            continuous
            hideBackButton
            tooltipComponent={TourTip}/>}
      </div>
    );
  }
}
