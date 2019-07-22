import React from 'react';
import styles from './style.scss';

const SubHeader = ({ title, ...rest }) => {
  return (
    <div className={styles.subHeader} {...rest}>
      <div className={styles.content}>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default SubHeader;
