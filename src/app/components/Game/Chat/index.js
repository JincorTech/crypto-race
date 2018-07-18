import React, { Component } from 'react';
import io from 'socket.io-client';
import s from './styles.css';

const socket = io('http://localhost:4000/chat');

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      messages: []
    };

    this._scrollToBottom = this._scrollToBottom.bind(this);
    this._handleType = this._handleType.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handlePressKey = this._handlePressKey.bind(this);
  }

  _scrollToBottom() {
    this.chatEnd.scrollIntoView({ behavior: 'smooth' });
  }

  _handleType(e) {
    this.setState({ message: e.target.value });
  }

  _handleSubmit(e) {
    e.preventDefault();
    if (this.state.message) {
      socket.emit('message', this.state.message);
      this.setState({ message: '' });
    }
  }

  _handlePressKey(e) {
    if (this.chat.contains(e.target)) {
      e.stopPropagation();
    }
  }

  _handleOutsideClick(e) {
    if (this.chat.contains(e.target)) {
      e.target.blur();
    }
  }

  componentDidMount() {
    this._scrollToBottom();
    document.addEventListener('keydown', this._handlePressKey, false);

    socket.on('connect', () => {
      socket.emit('requestInitData');
      socket.on('responseInitData', (messages) => this.setState({ messages }));
      socket.on('update', (messages) => this.setState({ messages }, this._scrollToBottom()));
    });
  }

  componentDidUpdate() {
    this._scrollToBottom();
  }

  render() {
    const { messages } = this.state;

    const renderMessage = (message) => (
      <div className={s.message} key={message.ts}>
        <span className={s.author}>{message.author}:</span>
        <span className={s.message}>{message.message}</span>
      </div>
    );

    return (
      <form
        className={s.chat}
        onSubmit={this._handleSubmit}
        ref={(el) => { this.chat = el; }}>
        <div className={s.header}>Chat</div>
        <div className={s.body}>
          {messages.map(renderMessage)}
          <div ref={(el) => { this.chatEnd = el; }}/>
        </div>
        <div className={s.footer}>
          <input
            type="text"
            className={s.input}
            placeholder="Message..."
            value={this.state.message}
            onChange={this._handleType}/>
        </div>
      </form>
    );
  }
}

export default Chat;
