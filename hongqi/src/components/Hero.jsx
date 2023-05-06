import React from 'react'
import HeroImg from '../images/car.svg'

const Hero = () => {
  return (
    <div className='container pt-5 position-relative hero'>
        <div className='heroImg'></div>
        <h1 className="history-title">История</h1>
        <p className="brand-name">Hongqi</p>
    </div>
  )
}

export default Hero