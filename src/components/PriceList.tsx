import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPrices } from '../store/priceSlice';
import { RootState, AppDispatch } from '../store';

const PriceList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const prices = useSelector((state: RootState) => state.prices.prices);

  useEffect(() => {
    dispatch(fetchPrices());
  }, [dispatch]);

  return (
    <div>
      <h2>Prices</h2>
      <ul>
        {prices.map((price) => (
          <li key={price.id}>
            {price.symbol}: {price.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceList;
