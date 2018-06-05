import * as React from 'react';
import s from './styles.css';

import Header from './Header';
import Layout from './Layout';
import Footer from './Footer';

export default class Garage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Layout />
        <Footer />
      </React.Fragment>
    )
  }
}