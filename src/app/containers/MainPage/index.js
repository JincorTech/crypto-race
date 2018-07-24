import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {Motion, spring} from 'react-motion';

import FacebookLogin from 'react-facebook-login';

import Header from '../../components/main/Header';
import Footer from '../../components/main/Footer';

import { signIn } from '../../redux/modules/app/app';

import { post } from '../../utils/fetch';
import s from './styles.css';

const Ship1 = '/assets/images/main_page/ship-1.png';
const Ship2 = '/assets/images/main_page/ship-2.png';
const Ship3 = '/assets/images/main_page/ship-3.png';

const ShipSmall1 = '/assets/images/main_page/ship-small-1.png';
const ShipSmall2 = '/assets/images/main_page/ship-small-2.png';
const ShipSmall3 = '/assets/images/main_page/ship-small-3.png';

const CoinImgs = [ 
  '/assets/images/main_page/crypto-1.png', 
  '/assets/images/main_page/crypto-2.png', 
  '/assets/images/main_page/crypto-3.png', 
  '/assets/images/main_page/crypto-4.png', 
  '/assets/images/main_page/crypto-5.png', 
  '/assets/images/main_page/crypto-6.png', 
  '/assets/images/main_page/crypto-7.png', 
  '/assets/images/main_page/crypto-8.png' 
]

const LogoImg = '/assets/images/main_page/logo.png';
const WavesImg = '/assets/images/main_page/waves-1.png';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: null,
      email: '',
      success: false
    };
  }

  componentDidMount() {
  }

  renderCoins = () => {
    return CoinImgs.map((img, index) => {
      return (
        <Motion key={index} style={{ y: spring(this.state.triggered ? document.documentElement.clientHeight : 0) }}>
          {({ y }) => (
            <div className={s.coin} style={{
              WebkitTransform: `translate3d(0, ${y}px, 0)`,
              transform: `translate3d(0, ${y}px, 0)`,
            }} onClick={() => {
              this.setState((prevState) => ({ triggered: !prevState.triggered }))
            }}>
              <img src={CoinImgs[index]} />
            </div>
          )}
        </Motion>
      )
    })
  }

  renderShip = (image, number, text) => {
    return (
      <div className={s.shipContainer}>
        <div className={s.ship}>
          <div className={s.shipNumber}>{number}</div>
          <img className={s.shipImg} src={image} />
        </div>
        <div className={s.shipCaption}>{text}</div>
      </div>
    );
  }

  renderScoreLine = (image, number, text, score) => {
    return (
      <div className={s.scoreLine}>
        <div className={s.scoreNumber}>{number}</div>
        <div className={s.scoreImgContainer}>
          <img className={s.scoreImg} src={image} />
        </div>
        <div className={s.scoreText}>{text}</div>
        <div className={s.scoreSpacer}/>
        <div className={s.scoreValue}>{score}</div>
      </div>
    );
  }

  renderSubscribeForm = () => {
    const {
      message,
      email,
      success
    } = this.state;

    const validationRegexp = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;

    return (
      <div className={s.subscribeForm}>
        <input placeholder={'Enter your email'} className={s.subscribeInput} value={email} onChange={(event) => this.setState({ email: event.target.value })} type="text" />
        {success && !message && <div className={s.subscribeSuccess}>{'Early access was requested'}</div>}
        {message && <div className={s.subscribeMessage}>{message}</div>}
        <div className={s.subscribeButton} type="submit" onClick={() => {
          if (!email.match(validationRegexp)) {
            this.setState({ message: 'Invalid email' });
          } else {
            post('https://game-api.secrettech.io/game/early', { email }).then((res) => {
              if (res.status === 200) {
                this.setState({ success: true, message: null });
              } else {
                this.setState({
                  success: false,
                  message: res.message.includes('email dup key')
                    ? 'This email has already been sent'
                    : res.message
                });
              }
            });
          }
        }}>Request early access</div>
      </div>
    );
  };

  render() {
    const {
      signIn,
      history
    } = this.props;

    return (
      <div>
        <Header/>
        <div className={s.main}>
          <div className={s.bg}>
            <div className={s.container}>
              {this.renderCoins()}
              <div className={s.topSection}>
                <img className={s.logo} src={LogoImg}/>
              </div>
              <div className={s.startSection}>
                {/* this.renderSubscribeForm() */}
                <div className={s.loginButtonWrapper}>
                  <FacebookLogin
                    cssClass={s.loginButton}
                    textButton=""
                    appId="1643728252419717"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={(res) => {
                      signIn(res.accessToken);
                      history.push('/garage');
                    }}/>
                </div>
                <img className={s.waves} src={WavesImg} />
              </div>
              <div className={s.bottomSection}>
                <div className={s.shipsContainer}>
                  {this.renderShip(Ship1, 1, 'SUPERZAP')}
                  {this.renderShip(Ship2, 2, 'CRYPTOBOY')}
                  {this.renderShip(Ship3, 3, 'VLADBITCOIN')}
                </div>
                <div className={s.scoreBoard}>
                  {this.renderScoreLine(ShipSmall1, 4, 'LEIMAN', 250691)}
                  {this.renderScoreLine(ShipSmall2, 5, 'ROMBROMB', 244300)}
                  {this.renderScoreLine(ShipSmall3, 6, 'ROCKSTAR91', 244300)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(null, {
  signIn
})(MainPage));
