import React from 'react'
import Waypoint from 'react-waypoint'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Nav from '../components/Nav'
import Gallery from "../components/Gallery";

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
import picJulesnoel01 from '../assets/images/salles/julesnoel-01.jpg'
import picJulesnoel02 from '../assets/images/salles/julesnoel-02.jpg'
import picRipoche01 from '../assets/images/salles/ripoche-01.jpg'
import picRipoche02 from '../assets/images/salles/ripoche-02.jpg'
import picRipoche03 from '../assets/images/salles/ripoche-03.jpg'

import thumbBercy01 from '../assets/images/salles/thumb/bercy-01.jpg'
import thumbBercy02 from '../assets/images/salles/thumb/bercy-02.jpg'
import thumbBercy03 from '../assets/images/salles/thumb/bercy-03.jpg'
import thumbBercy04 from '../assets/images/salles/thumb/bercy-04.jpg'
import thumbDumas01 from '../assets/images/salles/thumb/dumas-01.jpg'
import thumbDumas02 from '../assets/images/salles/thumb/dumas-02.jpg'
import thumbDumas03 from '../assets/images/salles/thumb/dumas-03.jpg'
import thumbDumas04 from '../assets/images/salles/thumb/dumas-04.jpg'
import thumbDumas05 from '../assets/images/salles/thumb/dumas-05.jpg'
import thumbFlorimont01 from '../assets/images/salles/thumb/florimont-01.jpg'
import thumbFlorimont02 from '../assets/images/salles/thumb/florimont-02.jpg'
import thumbJulesnoel01 from '../assets/images/salles/thumb/julesnoel-01.jpg'
import thumbJulesnoel02 from '../assets/images/salles/thumb/julesnoel-02.jpg'
import thumbRipoche01 from '../assets/images/salles/thumb/ripoche-01.jpg'
import thumbRipoche02 from '../assets/images/salles/thumb/ripoche-02.jpg'
import thumbRipoche03 from '../assets/images/salles/thumb/ripoche-03.jpg'

const DUMAS_IMAGES = [
    { id: 'dumas01', src: picDumas01, thumbnail: thumbDumas01},
    { id: 'dumas02', src: picDumas02, thumbnail: thumbDumas02},
    { id: 'dumas03', src: picDumas03, thumbnail: thumbDumas03},
    { id: 'dumas04', src: picDumas04, thumbnail: thumbDumas04},
    { id: 'dumas05', src: picDumas05, thumbnail: thumbDumas05},
];

const BERCY_IMAGES = [
    { id: 'bercy01', src: picBercy01, thumbnail: thumbBercy01},
    { id: 'bercy02', src: picBercy02, thumbnail: thumbBercy02},
    { id: 'bercy03', src: picBercy03, thumbnail: thumbBercy03},
    { id: 'bercy04', src: picBercy04, thumbnail: thumbBercy04},
];

const FLORIMONT_IMAGES = [
    { id: 'florimont01', src: picFlorimont01, thumbnail: thumbFlorimont01},
    { id: 'florimont02', src: picFlorimont02, thumbnail: thumbFlorimont02},
];


const JULESNOEL_IMAGES = [
    { id: 'julesnoel01', src: picJulesnoel01, thumbnail: thumbJulesnoel01},
    { id: 'julesnoel02', src: picJulesnoel02, thumbnail: thumbJulesnoel02},
];

const RIPOCHE_IMAGES = [
    { id: 'ripoche01', src: picRipoche01, thumbnail: thumbRipoche01},
    { id: 'ripoche02', src: picRipoche02, thumbnail: thumbRipoche02},
    { id: 'ripoche03', src: picRipoche03, thumbnail: thumbRipoche03},
];

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

                <Helmet title={'Salles | ' + get(this, 'props.data.site.siteMetadata.title')}>
                </Helmet>

                <Waypoint
                    onEnter={this._handleWaypointEnter}
                    onLeave={this._handleWaypointLeave}
                >
                </Waypoint>
                <Nav sticky={this.state.stickyNav}/>

                <div id="main">

                        <section id="dumas" className="main special">

                            <span className="image main"><img src={picBandeau} alt="bandeau"/></span>

                            <header className="major">
                                <h1>Les salles</h1>

                                <p>
                                    Voici les adresses des différentes salles parisiennes (dans le 12ème / 14ème / 20ème),
                                    permet de pratiquer la Savate Boxe Française.
                                </p>

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

                            <Gallery images={DUMAS_IMAGES.map(({ id, src, thumbnail}) => ({
                                src,
                                thumbnail,
                            }))} />

                        </section>
                        <section id="florimont" className="main special">
                            <header className="major">
                                <h2>SALLE MAINDRON</h2>
                                <p>
                                    Espace Maindron<br/>
                                    6 Rue Hippolyte Maindron<br/>
                                    75014 PARIS<br/>
                                    Métro : Pernety
                                </p>

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.3462941019393!2d2.3202533156734604!3d48.83253297928507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671b48b140733%3A0xd8827eb0daaf37f5!2s6+Rue+Hippolyte+Maindron%2C+75014+Paris!5e0!3m2!1sfr!2sfr!4v1531856185145"
                                    width="600" height="450" frameborder="0" allowFullScreen="allowFullScreen"></iframe>
                            </header>

                            <Gallery images={FLORIMONT_IMAGES.map(({ id, src, thumbnail}) => ({
                                src,
                                thumbnail,
                            }))} />
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
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.7839903633944!2d2.3121954145790573!3d48.82418277928413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e670522d4165f9%3A0xaa7a02bed27cded!2s3+Avenue+Maurice+d&#39;Ocagne%2C+75014+Paris!5e0!3m2!1sfr!2sfr!4v1531856373567"
                                        width="600" height="450" frameborder="0" allowfullscreen="allowFullScreen"></iframe>
                            </header>

                            <Gallery images={JULESNOEL_IMAGES.map(({ id, src, thumbnail}) => ({
                                src,
                                thumbnail,
                            }))} />
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

                            <Gallery images={RIPOCHE_IMAGES.map(({ id, src, thumbnail}) => ({
                                src,
                                thumbnail,
                            }))} />
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

                            <Gallery images={BERCY_IMAGES.map(({ id, src, thumbnail}) => ({
                                src,
                                thumbnail,
                            }))} />


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
