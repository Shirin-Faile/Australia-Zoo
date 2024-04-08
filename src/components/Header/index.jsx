import React from 'react';
import styles from './Header.module.css';
import logo from '/src/assets/logo.png';

const Header = () => {
    return (
        <>
        <header className={styles.header}>
            <img src={logo} className={styles.logo} />
        </header>
        </>
    );
};

export default Header;