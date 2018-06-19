import React from 'react'
import Link from 'gatsby-link'
import Waypoint from 'react-waypoint'

import Nav from '../components/Nav'

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
                                cours des différents moniteurs.</p>

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
                                <span><img src={picHoraires} alt=""/></span>
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

                            <ul className="features">
                                <li><span className="image main"><img src={picProf01} alt=""/></span></li>
                                <li><span className="image main"><img src={picProf02} alt=""/></span></li>
                                <li><span className="image main"><img src={picProf03} alt=""/></span></li>
                                <li><span className="image main"><img src={picProf04} alt=""/></span></li>
                                <li><span className="image main"><img src={picProf05} alt=""/></span></li>
                                <li><span className="image main"><img src={picProf06} alt=""/></span></li>
                                <li><span className="image main"><img src={picProf07} alt=""/></span></li>
                                <li><span className="image main"><img src={picProf08} alt=""/></span></li>
                            </ul>

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
