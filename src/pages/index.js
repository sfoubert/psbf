import React from 'react'
import Link from 'gatsby-link'
import Waypoint from 'react-waypoint'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Gallery from "../components/Gallery";

import picBandeau from '../assets/images/bercy-01.jpg'

import picClub01 from '../assets/images/club/assaut-01.jpg'
import picClub02 from '../assets/images/club/assaut-02.jpg'
import picClub03 from '../assets/images/club/assaut-03.jpg'
import picClub04 from '../assets/images/club/assaut-04.jpg'
import picClub05 from '../assets/images/club/assaut-05.jpg'
import picClub06 from '../assets/images/club/assaut-06.jpg'

import thumbClub01 from '../assets/images/club/thumb/assaut-01.jpg'
import thumbClub02 from '../assets/images/club/thumb/assaut-02.jpg'
import thumbClub03 from '../assets/images/club/thumb/assaut-03.jpg'
import thumbClub04 from '../assets/images/club/thumb/assaut-04.jpg'
import thumbClub05 from '../assets/images/club/thumb/assaut-05.jpg'
import thumbClub06 from '../assets/images/club/thumb/assaut-06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: picClub01, thumbnail: thumbClub01, caption: 'Challenge IDF', description: 'Compétition régionale à partir de gant rouge'},
    { id: '2', src: picClub02, thumbnail: thumbClub02, caption: 'Elite A', description: 'Championnat combat avec l\'elite de la boxe française'},
    { id: '6', src: picClub06, thumbnail: thumbClub06, caption: 'Photo de cours', description: 'Des cours durant les vacances scolaires et l\'été'},
    { id: '4', src: picClub04, thumbnail: thumbClub04, caption: 'Elite A', description: 'Championnat combat avec l\'elite de la boxe française'},
    { id: '5', src: picClub05, thumbnail: thumbClub05, caption: 'Photo de cours', description: 'Du renforcement musculaire, de la préparation physique'},
    { id: '3', src: picClub03, thumbnail: thumbClub03, caption: 'Photo de cours', description: 'Des assauts libres contrôlés, techniques et sans puissance'},

];

class Index extends React.Component {
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
                <Header />

                <Helmet title={'Le club | ' + get(this, 'props.data.site.siteMetadata.title')}>
                    <meta name="description" content="Club de Savate Boxe Française sur Paris" />
                    <meta name="robots" content="index,follow" />
                </Helmet>

                <Waypoint
                    onEnter={this._handleWaypointEnter}
                    onLeave={this._handleWaypointLeave}
                >
                </Waypoint>
                <Nav sticky={this.state.stickyNav}/>

                <div id="main">

                    <section id="club" className="main special">

                        <span className="image main"><img src={picBandeau} alt=""/></span>

                        <header className="major">
                            <h2>Le club</h2>
                            <p>
                                La rentrée sportive de notre section Boxe Française aura lieu le
                                &nbsp;<strong>lundi 3 septembre 2018</strong>.
                            </p>
                            <p>
                                Le PSBF est un nouveau club parisien composé d'enseignants expérimentés et passionnés.
                                Les cours sont tous niveaux, et ouverts aussi bien aux loisirs et aux compétiteurs.
                            </p>
                            <p>
                                L'inscription permet d'accèder à l'ensemble des créneaux et salles proposées.
                            </p>
                            <p>
                                Les couleurs du club sont le Bleu et Rouge.
                            </p>
                        </header>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <footer className="major">
                            <ul className="actions">
                                <li><Link to="/savate" className="button">La savate</Link></li>
                                <li><Link to="/faq-2018-2019" className="button">FAQ</Link></li>
                            </ul>
                        </footer>
                    </section>

                </div>

            </div>
        )
    }
}

Index.propTypes = {
    route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
