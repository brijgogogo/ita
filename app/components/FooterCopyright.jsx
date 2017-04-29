import React from 'react';

const FooterCopyright = () =>
  <div id="footer-copyright" className="clear">
    <div className="container">
      <div className="footer-left">
        <p>&copy; ITA Pvt Ltd {(new Date()).getFullYear()}</p>
      </div>
      <div className="footer-right">
        <ul className="list-inline">
          <li><a className="fa fa-facebook" href="#" /></li>
          <li><a className="fa fa-twitter" href="#" /></li>
          <li><a className="fa fa-google-plus" href="#" /></li>
        </ul>
      </div>
    </div>
  </div>

    module.exports = FooterCopyright;
