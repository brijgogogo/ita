import React from 'react';

const FooterMenu = () =>
  <div id="footer-menu" className="clear">
    <div className="container clear">
      <div>
        <h4><span>Menu</span></h4>
        <ul className="list-unstyled">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4><span>Services</span></h4>
        <ul className="list-unstyled">
          <li><a href="#">Trainings</a></li>
          <li><a href="#">Web Applications</a></li>
          <li><a href="#">Android Applications</a></li>
          <li><a href="#">iOS Applications</a></li>
          <li><a href="#">Partnerships</a></li>
        </ul>
      </div>
      <div>
        <h4><span>Contact</span></h4>
        <ul className="list-unstyled">
          <li>Integrated Training Academy</li>
          <li>RZ 87A, Street #14</li>
          <li>Durga Park</li>
          <li>Delhi 110045</li>
          <li><i className="fa fa-phone"></i> +91-9717050091</li>
        </ul>
      </div>
      <div>
        <h4><span>Newsletter</span></h4>
        <ul className="list-unstyled">
          <li><input type="text" /></li>
          <li><button className="btn-white">Subscribe</button></li>
          <li><span className="small-text italic-text">You have successfully subscribed. Thank you!</span></li>
        </ul>
      </div>
    </div>
  </div>

    module.exports = FooterMenu;
