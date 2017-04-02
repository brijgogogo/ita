import React from 'react';
import MainNav from './HeroMainNav.jsx';
import Brand from './Brand.jsx';

const Header = () =>
        <div className="row topbar">
          <div className="three columns topbar-left">
            <Brand />
          </div>
          <div className="nine columns topbar-right">
            <MainNav />
          </div>
        </div>

module.exports = Header;        
