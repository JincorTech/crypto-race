import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import { fetchInitialData } from '../../../redux/modules/game/game';

import AppRoute from '../../../components/app/AppRoute';
import MainPageRoute from '../../../components/app/MainPageRoute';
import AppWrapper from '../AppWrapper';
import MainPage from '../MainPage';

import { getEmail } from '../../../utils/auth';
import s from './styles.css';

class Main extends Component {
  componentDidMount() {
    window.socket.on('start', (data) => {
      const { players } = data;
      const player = players.filter((p) => p.email === getEmail())[0];
      this.props.fetchInitialData({ player, ...data });
      this.props.history.push(`/game?trackId=${data.id}`);
    });
  }

  render() {
    return (
      <div className={s.container}>
        <Switch>
          <MainPageRoute exact path="/" component={MainPage} />
          <AppRoute component={AppWrapper}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(
  null,
  {
    fetchInitialData
  }
)(Main));
