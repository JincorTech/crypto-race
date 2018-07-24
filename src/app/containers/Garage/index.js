import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import s from './styles.css';
import { getToken } from '../../utils/auth';

import { fetchTracks } from '../../redux/modules/garage/tracks';

import Header from 'components/main/Header';
import Footer from 'components/main/Footer';
import Layout from './Layout';


class Garage extends Component {
  componentDidMount() {
    window.tracksSocket = io.connect('https://game-api.secrettech.io/tracks', { query: `token=${getToken()}` });

    window.tracksSocket.on('connect', () => {
      window.tracksSocket.on('init', (tracks) => this.props.fetchTracks(tracks));
      window.tracksSocket.on('start', () => this.props.history.push('/game'));
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Layout />
        <Footer />
      </React.Fragment>
    );
  }
}


export default withRouter(connect(
  (state) => ({
    ...state.garage.tracks
  }),
  {
    fetchTracks
  }
)(Garage));
