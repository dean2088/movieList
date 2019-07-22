import React from 'react';
import styles from './style.scss';
import Button from '../Button';

const Header = ({ id, label, ...rest }) => {
  return (
    <div className={styles.header} {...rest}>
      <div className={styles.content}>
        <h1>DEMO Streaming</h1>
        <div>
          <a>Log in</a>
          <Button
            label="Start your free trail"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
