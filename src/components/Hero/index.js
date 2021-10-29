import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>La mejor comida.</HeroH1>
          <HeroP>Lista en cuestión de minutos</HeroP>
          <HeroBtn>Por favor ordene</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
