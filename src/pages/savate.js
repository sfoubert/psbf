import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'

import picBandeau from '../assets/images/salles/ripoche-01.jpg'
import picSavate01 from '../assets/images/savate/assaut-01.jpg'
import picSavate02 from '../assets/images/savate/assaut-02.jpg'
import picSavate03 from '../assets/images/savate/assaut-03.jpg'
import picSavate04 from '../assets/images/savate/assaut-04.jpg'

class Savate extends React.Component {
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
                <Helmet title={get(this, 'props.data.site.siteMetadata.title')}/>

                <Waypoint
                    onEnter={this._handleWaypointEnter}
                    onLeave={this._handleWaypointLeave}
                >
                </Waypoint>
                <Nav sticky={this.state.stickyNav}/>

                <div id="main">

                    <section id="savate" className="main special">
                        <span className="image main"><img src={picBandeau} alt=""/></span>
                        <header className="major">
                            <h2>La Savate</h2>
                        </header>

                        <p>
                            La Savate Boxe Française est un sport de combat pieds-poings basés sur des mouvements de percussions qui permettent de frapper avec les différentes surfaces des pieds et des poings suivant des techniques codifiées. Chaque mouvement appelé “coup” respecte la règle des 4 E : Ethique, Esthétique, Efficace et Educatif.
                        </p>
                        <p>
                            On distingue deux pratiques de la discipline : l’assaut et le combat. L’assaut est une rencontre opposant deux tireurs de même sexe et de même poids, qui se juge sur la maîtrise technique, le style, la précision des touches dont toute puissance doit être exclue. Le combat est une rencontre opposant deux tireurs de même sexe et de poids identique, qui se juge sur la technique, la précision, mais aussi l’efficacité des coups, et la combativité des tireurs.
                        </p>
                        <p>
                            La Savate Boxe Française est partie intégrante du patrimoine culturel immatériel français. Elle trouve ses origines au XIXe siècle.
                        </p>
                        <ul className="features">
                            <li><span className="image main"><img src={picSavate01} alt=""/></span></li>
                            <li><span className="image main"><img src={picSavate02} alt=""/></span></li>
                            <li><span className="image main"><img src={picSavate03} alt=""/></span></li>
                        </ul>
                        <footer className="major">
                            <ul className="actions">
                                <li><Link to="/planning" className="button">Le planning</Link></li>
                            </ul>
                        </footer>
                    </section>

                </div>

            </div>
        )
    }
}

Savate.propTypes = {
    route: React.PropTypes.object,
}

export default Savate

export const pageQuery = graphql`
  query SavateQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
