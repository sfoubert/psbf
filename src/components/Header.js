import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import picLogo from '../assets/images/logo.png'

const Header = (props) => (
    <div>
        <header id="header" className="alt">
            <span className="image main"><img src={picLogo} alt="P.S.B.F"/></span>
            <p>Club de Savate Boxe Française sur Paris.</p>
        </header>
    </div>
)

export default Header
