import React, { Component } from 'react';

import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
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
