import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getToken } from '../../../utils/auth';

const MainPageRoute = (props) => {
  const {
    component: Component,
    restProps
  } = props;

  const render = (renderProps) => (
    getToken()
      ? <Redirect to="/garage"/>
      : <Component {...renderProps}/>
  );

  return (
    <Route {...restProps} render={render}/>
  );
};

export default MainPageRoute;
