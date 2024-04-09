import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <footer className={styles.footer}>
                <p>© 2024 Australia Zoo. All rights reserved.</p>
                <p>Designed with ❤️ by Shirin</p>
            </footer>
        </div>
    );
}

export default Footer;