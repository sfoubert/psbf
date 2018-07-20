import React from 'react'
import Helmet from 'react-helmet'

import picLogo from '../assets/images/logo.svg'
import picFavIcon from '../assets/images/favicon.ico'
import picLogoBlack from '../assets/images/logo-black.svg'

const Header = (props) => (
    <div>
        <Helmet>
            <meta name="description" content="PSBF Paris Savate Boxe Française est un club de Savate Boxe Française sur Paris. Les cours sont tout niveaux, et ouverts aussi bien aux loisirs et aux compétiteurs. La rentrée sportive de notre section Boxe Française commence début septembre 2018."/>

            <meta itemProp="name" content="PSBF Paris Savate Boxe Française"/>
            <meta itemProp="description" content="Club de Savate Boxe Française sur Paris"/>
            <meta itemProp="image" content={picLogo}/>

            <meta property="og:url" content="http://www.parissavate.fr"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Le club | PSBF Paris Savate Boxe Française"/>
            <meta property="og:description" content="Club de Savate Boxe Française sur Paris"/>
            <meta property="og:image" content={picLogoBlack}/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="Le club | PSBF Paris Savate Boxe Française"/>
            <meta name="twitter:description" content="Club de Savate Boxe Française sur Paris"/>
            <meta name="twitter:image" content={picLogoBlack}/>

            <meta name="robots" content="index,follow"/>
            <link rel="canonical" href="http://www.parissavate.fr"/>
            <link rel="icon" href={picFavIcon} />
        </Helmet>

        <header id="header" className="alt">
            <span className="image main"><img src={picLogo} alt="P.S.B.F"/></span>
            <p>Club de Savate Boxe Française sur Paris.</p>
        </header>
    </div>
);

export default Header
