import React from 'react'
import Waypoint from 'react-waypoint'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Nav from '../components/Nav'

import picBandeau from '../assets/images/salles/ripoche-01.jpg'

class Inscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stickyNav: false
        }
    }

    _handleWaypointEnter = () => {
        this.setState(() => ({stickyNav: false}));
    }

    _handleWaypointLeave = () => {
        this.setState(() => ({stickyNav: true}));
    }

    render() {

        return (
            <div>
                <Helmet title={'Inscription | ' + get(this, 'props.data.site.siteMetadata.title')}>
                </Helmet>

                <Waypoint
                    onEnter={this._handleWaypointEnter}
                    onLeave={this._handleWaypointLeave}
                >
                </Waypoint>
                <Nav sticky={this.state.stickyNav}/>

                <div id="main">

                    <section id="inscription" className="main special">

                        <span className="image main"><img src={picBandeau} alt=""/></span>

                        <header className="major">
                            <h2>Inscription</h2>
                            <p>Vous êtes les bienvenus pour participer à un cours d’essai, il suffit de vous présenter
                                avec une tenue de sport à l’un des cours hebdomadaires.</p>
                        </header>
                        <footer className="major">
                            <ul className="actions">
                                <li><a href="https://www.e-cotiz.com/app/site/7210"
                                       target="_blank" className="button special">Inscription en ligne</a></li>
                            </ul>
                        </footer>
                    </section>

                </div>

            </div>
        )
    }
}

Inscription.propTypes = {
    route: React.PropTypes.object,
}

export default Inscription

export const pageQuery = graphql`
  query InscriptionQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
