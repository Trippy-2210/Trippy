import React from 'react';
import styles from './header.module.css'
import Link from 'next/link';

const Logo = ({data}) => {
  // lol why does a logo need data


  return (
    // <div className={styles.logo}>
    //   Trippy
    // </div>
    <Link href="/" className={styles.logo}>Trippy</Link>
  )
};

export default Logo;
