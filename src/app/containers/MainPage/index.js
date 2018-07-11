import * as React from 'react';
import cx from 'classnames';
import s from './styles.css';

const Ship1 = '/assets/images/main_page/ship-1.png';
const Ship2 = '/assets/images/main_page/ship-2.png';
const Ship3 = '/assets/images/main_page/ship-3.png';

const ShipSmall1 = '/assets/images/main_page/ship-small-1.png';
const ShipSmall2 = '/assets/images/main_page/ship-small-2.png';
const ShipSmall3 = '/assets/images/main_page/ship-small-3.png';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'хуевый имейл'//null
    }
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
    )
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
    )
  }

  renderSubscribeForm = () => {
    const {
      message
    } = this.state;

    return (
      <div className={s.subscribeForm} onSubmit={() => {

      }}>
        <input className={s.subscribeInput} type="text" />
        {message && <div className={s.subscribeMessage}>{message}</div>}
        <div className={s.subscribeButton} type="submit" onClick={() => {

        }}>Request early access</div>
      </div>
    )
  }

  render() {
    return (
      <div className={s.bg}>
        <div className={s.container}>
          <div className={s.topSection}>
          </div>
          <div className={s.startSection}>
            {this.renderSubscribeForm()}
          </div>
          <div className={s.bottomSection}>
            <div className={s.shipsContainer}>
              {this.renderShip(Ship1, 1, 'SUPERZAP')}
              {this.renderShip(Ship2, 2, 'CRYPTOBOY')}
              {this.renderShip(Ship3, 3, 'VLADBITCOIN')}
            </div>
            <div className={s.scoreBoard}>
              {this.renderScoreLine(ShipSmall1, 1, 'LEIMAN', 250691)}
              {this.renderScoreLine(ShipSmall2, 2, 'ROMBROMB', 244300)}
              {this.renderScoreLine(ShipSmall3, 3, 'ROCKSTAR91', 244300)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}