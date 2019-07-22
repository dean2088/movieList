import React from 'react';
import styles from './style.scss';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default class App extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div id="container" className={styles.container}>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}
