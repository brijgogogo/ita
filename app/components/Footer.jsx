import React from 'react';
import FooterMenu from './FooterMenu.jsx';
import FooterCopyright from './FooterCopyright.jsx';

const Footer = () =>
  <div id="footer" className="clear">
    <FooterMenu />
    <FooterCopyright />
  </div>

module.exports = Footer;
