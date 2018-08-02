import React from 'react';
import { Link } from 'react-router-dom';

import s from './styles.css';

const ActiveRace = (props) => (
  <div className={s.activeRace}>
    <div className={s.title}>
      <Link to={`/game?trackId=${props.trackId}`}>
        Race in progress. Press to connect
      </Link>
    </div>
  </div>
);

export default ActiveRace;
