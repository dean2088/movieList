import React from 'react';
import styles from './style.scss';
import PropTypes from 'prop-types';

const Footer = ({ list, socials, stores, ...rest }) => {
  return (
    <div className={styles.footer} {...rest}>
      <div className={styles.wrapper}>
        <nav className={styles.siteLinks}>
          <ul className={styles.list}>
            {list.map(({ href, label }) => (
              <li key={label}><a className={styles.link} href={href} rel="noopener noreferrer">{label}</a></li>
            ))}
          </ul>
        </nav>
        <div className={styles.externalLinks}>
          <ul className={styles.social}>
            {socials.map(({ href, label }) => (
              <li key={label}><a className={styles[label]} href={href} rel="noopener noreferrer" target="_blank" /></li>
            ))}
          </ul>
          <ul className={styles.store}>
            {stores.map(({ href, label, id }) => (
              <li key={label}><a className={styles[id]} href={href} rel="noopener noreferrer" target="_blank" /></li>
            ))}
          </ul>
        </div>
        <p className={styles.copyrights}><small>Copyright © Stan. All Rights Reserved.</small></p>
        <p className={styles.disclaimer}><small>.</small></p></div>
    </div>
  );
};

Footer.propTypes = {
  list: PropTypes.array,
  socials: PropTypes.array,
  stores: PropTypes.array
};

Footer.defaultProps = {
  list: [{
    href: 'https://www.stan.com.au/',
    label: 'Home'
  }, {
    href: 'https://www.stan.com.au/terms',
    label: 'Terms and Conditions'
  }, {
    href: 'https://www.stan.com.au/privacy-policy',
    label: 'Privacy Policy'
  }, {
    href: 'https://www.stan.com.au/collection-statement',
    label: 'Collection Statement'
  }, {
    href: 'https://help.stan.com.au/',
    label: 'Help'
  }, {
    href: 'https://www.stan.com.au/buygift',
    label: 'Buy a Stan Gift Card'
  }, {
    href: 'https://my.stan.com.au/',
    label: 'Manage Account'
  }],
  socials: [{
    href: 'https://www.facebook.com/StanAustralia',
    label: 'Facebook'
  }, {
    href: 'https://twitter.com/StanAustralia',
    label: 'Twitter'
  }, {
    href: 'https://instagram.com/stanaustralia',
    label: 'Instagram'
  }],
  stores: [{
    id: 'ios',
    href: 'https://itunes.apple.com/au/app/stan./id948095331?ls=1&amp;mt=8',
    label: 'Stan on iOS'
  }, {
    id: 'android',
    href: 'https://play.google.com/store/apps/details?id=au.com.stan.and',
    label: 'Stan on Android'
  }, {
    id: 'windows',
    href: 'https://www.microsoft.com/en-gb/store/apps/stan/9nblggh4wz0p',
    label: 'Stan on Windows 10'
  }]
};

export default Footer;
