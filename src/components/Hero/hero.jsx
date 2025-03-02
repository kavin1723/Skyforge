import React from 'react'
import './hero.css'
import Picture_One from '../../assets/picture_one.png'
import Picture_Two from '../../assets/picture_two.png'
import Picture_Three from '../../assets/picture_three.png'
import Picture_Four from '../../assets/picture_four.png'

const hero = () => {
  return (
    <div className='hero'> 
      <div >
        <p className="hero-text">PREDICT THE FUTURE</p>
        <p className='hero-sub-text'>FIND YOUR FATE WITH US</p>
        <button className='hero-button'>PREDICT NOW</button>
      </div>
      <div>
        <img src={Picture_One} alt="logo" className='picture_one'/>
        <img src={Picture_Two} alt="logo" className='picture_two'/>
        <img src={Picture_Three} alt="logo" className='picture_three'/>
        <img src={Picture_Four} alt="logo" className='picture_four'/>
      </div>
    </div>
  )
}

export default hero