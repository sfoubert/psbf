import React from 'react'
import Link from 'gatsby-link'
import Waypoint from 'react-waypoint'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Gallery from "../components/Gallery";

import picBandeau from '../assets/images/bercy-01.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: picBandeau, thumbnail: picBandeau, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', src: picBandeau, thumbnail: picBandeau, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', src: picBandeau, thumbnail: picBandeau, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', src: picBandeau, thumbnail: picBandeau, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', src: picBandeau, thumbnail: picBandeau, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', src: picBandeau, thumbnail: picBandeau, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
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
                                La rentrée sportive de notre section Boxe Française aura lieu le lundi 3 septembre 2018.
                            </p>
                            <p>
                                Le PSBF est un nouveau club parisien composé d'enseignants expérimentés et passionnés.
                                Les cours sont tous niveaux, et ouverts aussi bien aux loisirs et compétiteurs. Il compte
                                une moyenne de 120 adhérents dont 40% de féminines.
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
