import React from 'react';
import Logo from './Logo.js'
import Search from './Search.js'
import Sandwich from './Sandwich.js'


const Header = ({data}) => {


  return(
    <div className='header' style={{
      width: '100vw',
      height: '90px',
      backgroundColor: 'rgb(201, 86, 71)',
      position: 'fixed',
      top: '0',
      left: '0',}}>
      <div
      className='headerContainer'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}    >
        <Logo />
        <Search />
        <Sandwich />
      </div>

    </div>

    )

};

export default Header;