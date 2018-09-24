import React from 'react';
import { Link } from 'react-router-dom';
import s from './styles.css';

const ErrorState = () => (
  <div className={s.error}>
    <div className={s.wrapper}>
      <div className={s.title}>Something went wrong</div>
      <div className={s.link}>
        <Link to="/garage">Back to garage</Link>
      </div>
    </div>
  </div>
);

export default ErrorState;
