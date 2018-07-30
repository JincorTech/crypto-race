import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getToken } from '../../../utils/auth';

const AppRoute = (props) => {
  const {
    component: Component,
    restProps
  } = props;

  const render = (renderProps) => (
    getToken()
      ? <Component {...renderProps}/>
      : <Redirect to="/"/>
  );

  return (
    <Route {...restProps} render={render}/>
  );
};

export default AppRoute;
