import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProfile } from '../../../redux/modules/garage/profile';

import Button from '../../../components/common/Button';
import Avatar from '../../../components/common/Avatar';
import HealthIndicator from '../../../components/garage/HealthIndicator';

import s from './styles.css';

class User extends Component {
  componentDidMount() {
    window.socket.on('resProfile', (data) => this.props.fetchProfile(data));
    window.socket.emit('reqProfile');
  }

  render() {
    console.log(this.props);

    return (
      <div className={s.container}>
        <div className={s.info}>
          <div className={s.avatar}>
            <Avatar url={this.props.picture}/>
          </div>
          <div className={s.name}>
            <span>{this.props.name} /</span>
            <div className={s.indicator}>
              <HealthIndicator />
            </div>
            <div className={s.level}>
              <span>1</span>
            </div>
          </div>
          <div className={s.balance}>
            <span><span className={s.balanceCaption}></span><span className={s.balanceEth}>{this.props.balance} ETH</span> | {this.props.address}</span>
          </div>
        </div>
        <div className={s.buttons}>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({ ...state.garage.profile }),
  {
    fetchProfile
  }
)(User);
