import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

const Header = (props) => (
    <div>
        <header id="header" className="alt">
            <h1>P.S.B.F</h1>
            <p>Club de Savate Boxe Française sur Paris.</p>
        </header>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')}>
            <meta name="description" content="Club de Savate Boxe Française sur Paris" />
            <meta name="robots" content="index,follow" />
        </Helmet>
    </div>
)

export default Header
