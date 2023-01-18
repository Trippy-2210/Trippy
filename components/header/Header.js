import React from 'react';
import Logo from './Logo.js'
import Search from './Search.js'
import Sandwich from './Sandwich.js'

import styles from './header.module.css'



const Header = ({data}) => {


  return(
    <div className={styles.header}>
      <div
      className={styles.headerContainer}    >
        <Logo />
        <Search />
        <Sandwich />
      </div>

    </div>

    )

};

export default Header;