import React from 'react';
import PikachuReduxSagaConnect from './PikachuReduxSagaConnect';
import PikachuReduxSagaHook from './PikachuReduxSagaHook';
import PikachuRtkQueryHook from './PikachuRtkQueryHook';

const Pikachu = () => {
  return (
    <>
      <PikachuRtkQueryHook />
      <PikachuReduxSagaHook />
      <PikachuReduxSagaConnect />
    </>
  )
};

export default Pikachu;
