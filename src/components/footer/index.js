import React from 'react';
import styles from './index.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h1>Deepika Ecommerce</h1>
            <p>Latest Fashion Sarees & Jewelry Available</p>
            <p>Contact Us: <a href="tel:9716151959">9716151959</a></p>
        </footer>
    );
}

export default Footer;