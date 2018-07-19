import * as React from 'react';
import s from './styles.css';

import Header from 'components/main/Header';
import Footer from 'components/main/Footer';
import Layout from './Layout';


const Garage = () => (
  <React.Fragment>
    <Header />
    <Layout />
    <Footer />
  </React.Fragment>
)

export default Garage;