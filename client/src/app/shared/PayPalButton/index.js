import React from 'react';
import styles from './paypal.module.scss';

const PayPalButton = () => (
  <button className={styles.paypal_btn} type="submit" title="checkout">
    <i className={styles.logo_alt} />
    <p className={styles.paypal_txt}>
      <span>Pay</span>
      <span>Pal</span>
    </p>
  </button>
);

export default PayPalButton;
