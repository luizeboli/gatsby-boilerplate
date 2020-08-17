import * as React from 'react';

import ReactLogo from '@assets/react.svg';
import Layout from '@components/Layout';

const Home = () => (
  <Layout>
    <img src={ReactLogo} width="100" />
    <h1>Boilerplate</h1>
  </Layout>
);

export default Home;
