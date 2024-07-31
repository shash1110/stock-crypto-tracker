import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import PriceList from '../components/PriceList';

const Home = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Stock and Crypto Tracker</h1>
        <PriceList />
      </div>
    </Provider>
  );
};

export default Home;
