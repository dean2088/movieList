import React from 'react';
import styles from './style.scss';

const MovieCard = ({ url, title, ...rest }) => {
  return (
    <div className={styles.movieCard} {...rest}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${url})` }}
      />
      <label>{title}</label>
    </div>
  );
};

export default MovieCard;
