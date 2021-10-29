import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza del día</h1>
      <p>TSalsa Marco de trufa cubierta con polvo de oro de 24 quilates.</p>
      <FeatureButton>ordenar ahora</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
