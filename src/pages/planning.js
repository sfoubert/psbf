import React from 'react'
import Link from 'gatsby-link'
import Waypoint from 'react-waypoint'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Nav from '../components/Nav'
import Gallery from "../components/Gallery";

import picHoraires from '../assets/images/horaires.png'
import picBandeau from '../assets/images/bercy-01.jpg'
import picProf01 from '../assets/images/profs/dom-01.jpg'
import picProf02 from '../assets/images/profs/dom-02.jpg'
import picProf03 from '../assets/images/profs/jeremie-01.jpg'
import picProf04 from '../assets/images/profs/malika-brahim-01.jpg'
import picProf05 from '../assets/images/profs/malika-dom-seb-jerome-01.jpg'
import picProf06 from '../assets/images/profs/maria-01.jpg'
import picProf07 from '../assets/images/profs/seb-01.jpg'
import picProf08 from '../assets/images/profs/seb-dom-jerome-01.jpg'

import thumbProf01 from '../assets/images/profs/thumb/dom-01.jpg'
import thumbProf02 from '../assets/images/profs/thumb/dom-02.jpg'
import thumbProf03 from '../assets/images/profs/thumb/jeremie-01.jpg'
import thumbProf04 from '../assets/images/profs/thumb/malika-brahim-01.jpg'
import thumbProf05 from '../assets/images/profs/thumb/malika-dom-seb-jerome-01.jpg'
import thumbProf06 from '../assets/images/profs/thumb/maria-01.jpg'
import thumbProf07 from '../assets/images/profs/thumb/seb-01.jpg'
import thumbProf08 from '../assets/images/profs/thumb/seb-dom-jerome-01.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: picProf01, thumbnail: thumbProf01},
    { id: '2', src: picProf02, thumbnail: thumbProf02},
    { id: '3', src: picProf03, thumbnail: thumbProf03},
    { id: '4', src: picProf04, thumbnail: thumbProf04},
    { id: '6', src: picProf06, thumbnail: thumbProf06},
    { id: '7', src: picProf07, thumbnail: thumbProf07},
    { id: '8', src: picProf08, thumbnail: thumbProf08},
];

class Planning extends React.Component {
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

                <Helmet title={'Planning | ' + get(this, 'props.data.site.siteMetadata.title')}>
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

                    <section id="planning" className="main">
                        <span className="image main"><img src={picBandeau} alt=""/></span>

                        <div className="content">
                            <header className="major">
                                <h2>Planning</h2>
                            </header>
                            <p>Plusieurs horaires et salles sur paris sont proposés pour les entraînements tout au
                                long de la semaine. Chaque adhérent accède à tous les créneaux afin de suivre les
                                cours des différents moniteurs. Pensez à arriver 15min avant le début de la séance
                                pour vous changer.
                            </p>
                            <table>
                                <thead>
                                <tr>
                                    <th>Jour</th>
                                    <th>Horaire</th>
                                    <th>Entraîneurs</th>
                                    <th>Salle</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Lundi</td>
                                    <td>18:30 - 19:30</td>
                                    <td>Malika, Dominique</td>
                                    <td>Florimont</td>
                                </tr>
                                <tr>
                                    <td>Lundi</td>
                                    <td>20:30 - 22:00</td>
                                    <td>Sébastien, Jérémie, Maria</td>
                                    <td>Alexandre Dumas</td>
                                </tr>
                                <tr>
                                    <td>Mardi</td>
                                    <td>20:30 - 22:00</td>
                                    <td>Miodrag</td>
                                    <td>Jules Noël</td>
                                </tr>
                                <tr>
                                    <td>Jeudi</td>
                                    <td>19:00 - 20:30</td>
                                    <td>Dominique</td>
                                    <td>Ripoche</td>
                                </tr>
                                <tr>
                                    <td>Vendredi</td>
                                    <td>19:00 - 20:30</td>
                                    <td>Jérôme</td>
                                    <td>Ripoche</td>
                                </tr>
                                <tr>
                                    <td>Samedi</td>
                                    <td>10:00 - 12:00</td>
                                    <td>Jérôme</td>
                                    <td>Bercy</td>
                                </tr>
                                </tbody>
                                <tfoot>
                                </tfoot>
                            </table>

                            <p>
                                <span><img className="image main" src={picHoraires} alt=""/></span>
                            </p>

                            <ul className="actions">
                                <li><Link to="/salles" className="button">Les salles</Link></li>
                            </ul>
                        </div>

                    </section>


                    <section id="profs" className="main">

                        <div className="content">
                            <header className="major">
                                <h2>Les moniteurs</h2>
                            </header>

                            <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail}) => ({
                                src,
                                thumbnail,
                            }))} />

                        </div>
                        <footer className="major">
                            <ul className="actions">
                                <li><Link to="/salles" className="button">Les salles</Link></li>
                            </ul>
                        </footer>
                    </section>

                </div>

            </div>
        )
    }
}

Planning.propTypes = {
    route: React.PropTypes.object,
}

export default Planning

export const pageQuery = graphql`
  query PlanningQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
