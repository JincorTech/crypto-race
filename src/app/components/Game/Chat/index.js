import React, { Component } from 'react';
import s from './styles.css';

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
      window.socket.emit('message', { message: this.state.message, chatId: this.props.trackId });
      this.setState({ message: '' });
      this._scrollToBottom();
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

    window.socket.on('joinedChat', (messages) => this.setState({ messages }, this._scrollToBottom()));
    window.socket.on('updateChat', (messages) => this.setState({ messages }, this._scrollToBottom()));
    window.socket.emit('joinChat', { trackId: this.props.trackId });
  }

  componentDidUpdate() {
    this._scrollToBottom();
  }

  render() {
    const { messages } = this.state;

    const renderMessage = (message) => (
      <div className={s.message} key={message.ts}>
        <span className={s.author}>{message.author}:</span>
        <span className={s.message}>{message.message.message}</span>
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
