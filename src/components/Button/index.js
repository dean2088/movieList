import React from 'react';
import styles from './style.scss';

const Button = ({ id, label, ...rest }) => {
  return (
    <button className={styles.button} type="button" {...rest}>
      {label}
    </button>
  );
};

export default Button;
