import * as React from 'react';

import Joyride from 'react-joyride';

import User from '../../../containers/garage/User';
import ShipSettings from '../ShipSettings';
import Races from '../../../containers/garage/Races';
import TourTip from '../../../components/garage/TourTip';

import s from './styles.css';

const stepStyle = {
  options: {
    arrowColor: '#fff',
    backgroundColor: '#fff',
    beaconSize: 36,
    overlayColor: 'rgba(0, 0, 0, 0.5)',
    primaryColor: '#f04',
    spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
    textColor: '#333',
    width: undefined,
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
    console.log('callback', data);
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

        <Joyride
          steps={this.state.steps}
          run={this.state.run}
          callback={this.callback}
          continuous
          hideBackButton
          tooltipComponent={TourTip}/>
      </div>
    );
  }
}
