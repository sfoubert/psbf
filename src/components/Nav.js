import React from 'react';
import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy';

import picLogoGrey from '../assets/images/logo-grey.png'

const Nav = (props) => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>

    <Scrollspy items={['', 'club', 'savate', 'planning', 'salles', 'inscription']} currentClassName="is-active"
               offset={-300}>

      <li>
        <span className="logo">
          <img src={picLogoGrey} alt="PSBF"/>
        </span>
      </li>

      <li>
        <a href="/">Le club</a>
      </li>
      <li>
        <a href="/savate">La savate</a>
      </li>
      <li>
        <a href="/planning">Le planning</a>
      </li>
      <li>
        <a href="/salles">Les salles</a>
      </li>
      <li>
        <a href="/inscription">Inscription</a>
      </li>
    </Scrollspy>
  </nav>
);

Nav.propTypes = {
  sticky: PropTypes.bool.isRequired
};

export default Nav
