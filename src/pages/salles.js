import React from 'react'
import Waypoint from 'react-waypoint'
import Link from 'gatsby-link'

import Nav from '../components/Nav'

import picBandeau from '../assets/images/salles/ripoche-01.jpg'
import picBercy01 from '../assets/images/salles/bercy-01.jpg'
import picBercy02 from '../assets/images/salles/bercy-02.jpg'
import picBercy03 from '../assets/images/salles/bercy-03.jpg'
import picBercy04 from '../assets/images/salles/bercy-04.jpg'
import picDumas01 from '../assets/images/salles/dumas-01.jpg'
import picDumas02 from '../assets/images/salles/dumas-02.jpg'
import picDumas03 from '../assets/images/salles/dumas-03.jpg'
import picDumas04 from '../assets/images/salles/dumas-04.jpg'
import picDumas05 from '../assets/images/salles/dumas-05.jpg'
import picFlorimont01 from '../assets/images/salles/florimont-01.jpg'
import picFlorimont02 from '../assets/images/salles/florimont-02.jpg'
import picRipoche01 from '../assets/images/salles/ripoche-01.jpg'
import picRipoche02 from '../assets/images/salles/ripoche-02.jpg'
import picRipoche03 from '../assets/images/salles/ripoche-03.jpg'

class Salles extends React.Component {
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

                    <section id="salles" className="main special">

                        <span className="image main"><img src={picBandeau} alt=""/></span>

                        <section id="dumas" className="main special">
                            <header className="major">
                                <h2>SALLE MY FITNESS STUDIO</h2>
                                <p>
                                    91 Rue Alexandre Dumas<br/>
                                    75020 PARIS<br/>
                                    Métro : Alexandre Dumas
                                </p>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.170117378261!2d2.395119157723748!3d48.85496635439102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d88222e48db%3A0x242897b48b830f56!2s91+Rue+Alexandre+Dumas%2C+75020+Paris!5e0!3m2!1sfr!2sfr!4v1503692249761"
                                    width="600" height="450" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>
                            </header>

                            <ul className="features">
                                <li><span className="image main"><img src={picDumas01} alt=""/></span></li>
                                <li><span className="image main"><img src={picDumas02} alt=""/></span></li>
                                <li><span className="image main"><img src={picDumas03} alt=""/></span></li>
                                <li><span className="image main"><img src={picDumas04} alt=""/></span></li>
                                <li><span className="image main"><img src={picDumas05} alt=""/></span></li>
                            </ul>
                        </section>
                        <section id="florimont" className="main special">
                            <header className="major">
                                <h2>SALLE FLORIMONT</h2>
                                <p>
                                    Espace Maindron<br/>
                                    6 Rue Hippolyte Maindron<br/>
                                    75014 PARIS<br/>
                                    Métro : Pernety
                                </p>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.170117378261!2d2.395119157723748!3d48.85496635439102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d88222e48db%3A0x242897b48b830f56!2s91+Rue+Alexandre+Dumas%2C+75020+Paris!5e0!3m2!1sfr!2sfr!4v1503692249761"
                                    width="600" height="450" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>
                            </header>

                            <ul className="features">
                                <li><span className="image main"><img src={picFlorimont01} alt=""/></span></li>
                                <li><span className="image main"><img src={picFlorimont02} alt=""/></span></li>
                            </ul>
                        </section>

                        <section id="julesnoel" className="main special">
                            <header className="major">
                                <h2>STADE JULES NOEL</h2>
                                <p>
                                    3 Avenue Maurice d'Ocagne<br/>
                                    75014 PARIS<br/>
                                    Métro: Portes de Vanves ou d'Orléans<br/>
                                    Tramway T3a: Didot ou Jean Moulin
                                </p>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21014.190064212304!2d2.314917!3d48.824378!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e670522d4165f9%3A0xaa7a02bed27cded!2s3+Avenue+Maurice+d'Ocagne%2C+75014+Paris!5e0!3m2!1sfr!2sfr!4v1441540231121"
                                    width="600" height="450" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>
                            </header>
                        </section>

                        <section id="ripoche" className="main special">
                            <header className="major">
                                <h2>SALLE RIPOCHE</h2>
                                <p>
                                    58 rue Maurice Ripoche<br/>
                                    75014 PARIS<br/>
                                    Métro : Pernety
                                </p>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.302622056803!2d2.3208441156735016!3d48.83336607928511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671b45826c4f5%3A0x65f1d198b244797f!2s58+Rue+Maurice+Ripoche%2C+75014+Paris!5e0!3m2!1sfr!2sfr!4v1502403407448"
                                    width="600" height="450" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>
                            </header>

                            <ul className="features">
                                <li><span className="image main"><img src={picRipoche01} alt=""/></span></li>
                                <li><span className="image main"><img src={picRipoche02} alt=""/></span></li>
                                <li><span className="image main"><img src={picRipoche03} alt=""/></span></li>
                            </ul>
                        </section>

                        <section id="bercy" className="main special">
                            <header className="major">
                                <h2>SALLE PARIS BERCY 12</h2>
                                <p>
                                    10 Place Léonard Bernstein<br/>
                                    75012 Paris<br/>
                                    Métro : Ligne 6 (arrêt Bercy) - Ligne 14 (arrêt Cour Saint Emilion)<br/>
                                    Accès : la salle se situe sous les grands escaliers qui mènent à la passerelle vers
                                    la
                                    BNF, à côté des machines de musculation extérieures
                                </p>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.126610206226!2d2.3787305635587845!3d48.83672362261667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e672165e5225e1%3A0x92ed9bae0d379c47!2s10+Place+L%C3%A9onard+Bernstein%2C+75012+Paris!5e0!3m2!1sfr!2sfr!4v1505861471128"
                                    width="600" height="450" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>
                            </header>

                            <ul className="features">
                                <li><span className="image main"><img src={picBercy01} alt=""/></span></li>
                                <li><span className="image main"><img src={picBercy02} alt=""/></span></li>
                                <li><span className="image main"><img src={picBercy03} alt=""/></span></li>
                                <li><span className="image main"><img src={picBercy04} alt=""/></span></li>
                            </ul>

                        </section>

                        <footer className="major">
                            <ul className="actions">
                                <li><Link to="/inscription" className="button">Inscription</Link></li>
                            </ul>
                        </footer>
                    </section>

                </div>
            </div>
        )
    }
}

export default Salles

export const pageQuery = graphql`
  query SallesQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
