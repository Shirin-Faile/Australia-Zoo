import React from 'react';
import styles from './Header.module.css';
import logo from '/src/assets/logo.png';

const Header = ({ pageTitle }) => {
    return (
        <>
        <header className={styles.header}>
            <img src={logo} className={styles.logo} />
            <h1>{pageTitle}</h1>
        </header>
        </>
    );
};

export default Header;