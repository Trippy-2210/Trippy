import React from 'react';
import styles from './header.module.css'

const Logo = ({data}) => {
  // lol why does a logo need data

  return (
    <div className={styles.logo}>
      Trippy
    </div>
  )
};

export default Logo;
