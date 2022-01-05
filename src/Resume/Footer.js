import React, { PropTypes } from 'react';
import Link from '../ui/Link';

const Footer = ({ footer }) => (
  <section style={style.main}>
  </section>
);

const style = {
  main: {
    flex: '1 1 auto',
    marginTop: '2rem',
    borderTop: '1px solid black',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  icon: {
    display:'inline-block',
    fontSize: '1.6rem',
    lineHeight: '1.6rem',
    width: '2.4rem',
    height: '2.4rem',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: 'rgba(77, 100, 141, 1)',
    border: '1px solid rgba(77, 100, 141, 1)',
    borderRadius: '60px',
    padding: '4px',
  },
};

export default Footer;
