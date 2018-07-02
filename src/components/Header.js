import React from 'react'
import Helmet from 'react-helmet'

import picLogo from '../assets/images/logo.png'

const Header = (props) => (
    <div>
        <Helmet>
            <meta name="description" content="PSBF - Paris Savate Boxe Française est un club de Savate Boxe Française sur Paris"/>

            <meta itemProp="name" content="Le club | PSBF - Paris Savate Boxe Française"/>
            <meta itemProp="description" content="Club de Savate Boxe Française sur Paris"/>
            <meta itemProp="image" content={picLogo}/>

            <meta property="og:url" content="http://www.parissavate.fr"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Le club | PSBF - Paris Savate Boxe Française"/>
            <meta property="og:description" content="Club de Savate Boxe Française sur Paris"/>
            <meta property="og:image" content={picLogo}/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="Le club | PSBF - Paris Savate Boxe Française"/>
            <meta name="twitter:description" content="Club de Savate Boxe Française sur Paris"/>
            <meta name="twitter:image" content={picLogo}/>

            <meta name="robots" content="index,follow"/>
            <link rel="canonical" href="http://www.parissavate.fr"/>
        </Helmet>

        <header id="header" className="alt">
            <span className="image main"><img src={picLogo} alt="P.S.B.F"/></span>
            <p>Club de Savate Boxe Française sur Paris.</p>
        </header>
    </div>
)

export default Header
