import React from 'react'

import './navbar.css'

import logo from '../../assets/logo.png'

const navbar = () => {

  return (

    <nav className='container'>

        <img src={logo} alt="logo" className='logo'/>

        <h2 className='logo-text'>SKYFORGE</h2>

    </nav>

  );

}



export default navbar