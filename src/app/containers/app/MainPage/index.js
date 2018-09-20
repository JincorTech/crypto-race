import * as React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import MovingCoins from '../../../components/main/MovingCoins';

import { signIn } from '../../../redux/modules/app/app';

import { post } from '../../../utils/fetch';
import { isAuth } from '../../../utils/auth';
import s from './styles.css';

const Ship1 = '/assets/images/main_page/ship-1.png';
const Ship2 = '/assets/images/main_page/ship-2.png';
const Ship3 = '/assets/images/main_page/ship-3.png';

const ShipSmall1 = '/assets/images/main_page/ship-small-1.png';
const ShipSmall2 = '/assets/images/main_page/ship-small-2.png';
const ShipSmall3 = '/assets/images/main_page/ship-small-3.png';

const LogoImg = '/assets/images/main_page/logo.png';
const WavesImg = '/assets/images/main_page/waves-1.png';

const cx = classnames.bind(s);

function isMobileDevice() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: null,
      email: '',
      success: false
    };
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
      signIn
    } = this.props;

    return (
      <div>
        <div className={s.header}>
          <Header signIn={signIn}/>
        </div>
        <div className={cx(s.main, isAuth() && s.auth)}>
          <div className={s.bg}>
            {!isMobileDevice() && <MovingCoins />}
            <div className={s.container}>
              <div className={s.topSection}>
                <img className={s.logo} src={LogoImg}/>
              </div>
              <div className={s.startSection}>
                {/* this.renderSubscribeForm() */}
                <div className={cx(s.loginButtonWrapper, isAuth() && s.hidden)}>
                  <FacebookLogin
                    cssClass={s.facebookButton}
                    textButton="Login via Facebook"
                    appId="1643728252419717"
                    autoLoad={true}
                    fields="name,email,picture"
                    disableMobileRedirect={true}
                    callback={(res) => {
                      signIn({ service: 'facebook', token: res.accessToken });
                    }}/>

                  <GoogleLogin
                    className={s.googleButton}
                    clientId="144439937873-34r5hj1cjld4stifb5rrgcl50accnvgc.apps.googleusercontent.com"
                    buttonText="Login via Google"
                    onSuccess={(res) => signIn({ service: 'google', token: res.accessToken })}
                    onFailure={(res) => console.log('goog failure', res)}/>
                </div>

                <div className={cx(s.startButtonWrapper, !isAuth() && s.hidden)}>
                  <Link className={s.startButton} to="/garage"/>
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
