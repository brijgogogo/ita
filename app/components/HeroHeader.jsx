import React from 'react';
import MainNav from './HeroMainNav.jsx';
import Brand from './Brand.jsx';

const Header = () =>
  //<div className="row topbar">
  //<div className="three columns topbar-left">-->
  //<div className="nine columns topbar-right">-->
    <div className="topbar clear">
      <div className="topbar-left">
        <Brand />
      </div>
      <div className="topbar-right">
        <MainNav />
      </div>
    </div>

module.exports = Header;        
