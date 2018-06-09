import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/savate-logo.jpg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>P.S.B.F</h1>
        <p>Club de Savate Boxe Française sur Paris.</p>
    </header>
)

export default Header
