import React from 'react';
import PropTypes from 'prop-types';
import styles from './paypal.module.scss';

const PayPalButton = ({ handleClick }) => (
  <button
    type="submit"
    title="checkout"
    className={styles.paypal_btn}
    onClick={() => handleClick()}
  >
    <i className={styles.logo_alt} />
    <p className={styles.paypal_txt}>
      <span>Pay</span>
      <span>Pal</span>
    </p>
  </button>
);

PayPalButton.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default PayPalButton;
