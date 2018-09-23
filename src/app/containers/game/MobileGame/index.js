import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';

import MobileTopbar from '../../../components/game/MobileTopbar';
import MobilePlayer from '../../../components/game/MobilePlayer';
import MobileChat from '../../../components/game/MobileChat';
import GameOverPopup from '../../../components/game/GameOverPopup';

import s from './styles.css';

const cx = classnames.bind(s);

class MobileGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChatOpen: false,
      players: [],
      gameover: false,
      results: []
    };

    this._toggleChat = this._toggleChat.bind(this);
    this._updatePositions = this._updatePositions.bind(this);
    this._getPlayers = this._getPlayers.bind(this);
  }

  componentDidMount() {
    // shit
    this.setState({ players: this.props.players });

    window.socket.on('positionUpdate', (data) => {
      this._updatePositions(data);
    });

    window.socket.on('gameover', (results) => {
      this.setState({ gameover: true, results });
    });
  }

  _toggleChat() {
    this.setState({ isChatOpen: !this.state.isChatOpen });
  }

  _updatePositions(newPositions) {
    const players = this.state.players.map((player) => {
      const { position, score } = newPositions.find((pos) => pos.id === player.id);
      return { ...player, position, score };
    });

    this.setState({ players });
  }

  _getPlayers() {
    return [...this.state.players].sort((a, b) => a.position - b.position);
  }

  render() {
    const {
      start,
      end
    } = this.props;

    const { isChatOpen } = this.state;

    return (
      <div className={s.mobileGameWrapper}>
        <MobileTopbar startTS={start} endTS={end} />

        <div className={s.container}>
          <div className={s.players}>
            {this._getPlayers().map((player, index, array) =>
              <MobilePlayer key={player.id} {...player} total={array.length}/>)}
          </div>
        </div>

        <div className={cx(s.chatWrapper, isChatOpen && s.open)}>
          <div className={s.chat}>
            <div className={s.title} onClick={this._toggleChat}>CHAT</div>
            <MobileChat trackId={this.props.trackId}/>
          </div>
        </div>

        {this.state.gameover &&
          <div className={s.gameover}><GameOverPopup players={this.state.results}/></div>}
      </div>
    );
  }
}


export default connect(
  (state) => ({
    start: state.game.game.start,
    end: state.game.game.end
  }),
  {}
)(MobileGame);
