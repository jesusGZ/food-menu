import React from 'react'
import Navbar from '../Navbar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>La mejor comida.</HeroH1>
                    <HeroP>Lista en cuestión de minutos</HeroP>
                    <HeroBtn>Por favor ordene</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
