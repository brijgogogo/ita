import React from 'react';

const mainMenuData = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Blog",
  "Contact"
];

const MainNav = () =>
    <nav className="main-nav">
      <ul className="list-unstyled list-inline">
        {mainMenuData.map((d, i) => <li key={i}><a href="#">{d}</a></li>)}
      </ul>
  </nav>

module.exports = MainNav;
