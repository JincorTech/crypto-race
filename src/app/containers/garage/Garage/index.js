import React, { Component } from 'react';

import Header from '../../../components/main/Header';
import Footer from '../../../components/main/Footer';
import Layout from '../../../components/garage/Layout';

class Garage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Layout />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Garage;
