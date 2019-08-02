import React from 'react'
import Waypoint from 'react-waypoint'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Nav from '../components/Nav'
import SallesSwipe from '../components/SallesSwipe'

import picBandeau from '../assets/images/salles/ripoche-01.jpg'

import picSalles from '../assets/images/salles/salles.png'

import picBercy01 from '../assets/images/salles/bercy-01.jpg'
import picBercy02 from '../assets/images/salles/bercy-02.jpg'
import picJulesnoel01 from '../assets/images/salles/julesnoel-01.jpg'
import picJulesnoel02 from '../assets/images/salles/julesnoel-02.jpg'
import picRipoche01 from '../assets/images/salles/ripoche-01.jpg'
import picRipoche02 from '../assets/images/salles/ripoche-02.jpg'
import picRipoche03 from '../assets/images/salles/ripoche-03.jpg'
import picReuilly01 from '../assets/images/salles/reuilly-01.jpg'
import picReuilly02 from '../assets/images/salles/reuilly-02.jpg'

import thumbBercy01 from '../assets/images/salles/thumb/bercy-01.jpg'
import thumbBercy02 from '../assets/images/salles/thumb/bercy-02.jpg'
import thumbJulesnoel01 from '../assets/images/salles/thumb/julesnoel-01.jpg'
import thumbJulesnoel02 from '../assets/images/salles/thumb/julesnoel-02.jpg'
import thumbRipoche01 from '../assets/images/salles/thumb/ripoche-01.jpg'
import thumbRipoche02 from '../assets/images/salles/thumb/ripoche-02.jpg'
import thumbRipoche03 from '../assets/images/salles/thumb/ripoche-03.jpg'
import thumbReuilly01 from '../assets/images/salles/thumb/reuilly-01.jpg'
import thumbReuilly02 from '../assets/images/salles/thumb/reuilly-02.jpg'

const BERCY_IMAGES = [
  {id: 'bercy01', src: picBercy01, thumbnail: thumbBercy01},
  {id: 'bercy02', src: picBercy02, thumbnail: thumbBercy02},
];

const JULESNOEL_IMAGES = [
  {id: 'julesnoel01', src: picJulesnoel01, thumbnail: thumbJulesnoel01},
  {id: 'julesnoel02', src: picJulesnoel02, thumbnail: thumbJulesnoel02},
];

const RIPOCHE_IMAGES = [
  {id: 'ripoche01', src: picRipoche01, thumbnail: thumbRipoche01},
  {id: 'ripoche02', src: picRipoche02, thumbnail: thumbRipoche02},
  {id: 'ripoche03', src: picRipoche03, thumbnail: thumbRipoche03},
];

const REUILLY_IMAGES = [
  {id: 'reuilly01', src: picReuilly01, thumbnail: thumbReuilly01},
  {id: 'reuilly02', src: picReuilly02, thumbnail: thumbReuilly02},
];

class Salles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    };

    this.salles = [ {
      id: 'bercy',
      name: 'Bercy',
      street: '242 rue de Bercy',
      zipCode: '75012',
      city: 'PARIS',
      transport: 'Métro : Quai de la rapée (ligne 5) ou Gare de Lyon (ligne 1)',
      googleMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5563.563383030891!2d2.3649996929189974!3d48.845772270150576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67202e2440ab9%3A0xc2d0ed7a59295c6f!2s242+Rue+de+Bercy%2C+75012+Paris!5e0!3m2!1sfr!2sfr!4v1564347616953!5m2!1sfr!2sfr',
      images: BERCY_IMAGES.map(({id, src, thumbnail}) => ({
        src,
        thumbnail,
      }))
    }, {
        id: 'julesnoel',
        name: 'Jules Noël',
        street: '3 Avenue Maurice d\'Ocagne',
        zipCode: '75014',
        city: 'PARIS',
        transport: 'Métro: Portes de Vanves (ligne 13) ou Porte d\'Orléans (ligne 4) ou Tramway T3a Didot ou Jean Moulin',
        googleMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.8021291743453!2d2.3120576146852443!3d48.8238367110947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67052343d9359%3A0xbe12b55bb33f960c!2sCentre+sportif+Jules+No%C3%ABl!5e0!3m2!1sfr!2sfr!4v1532796752568',
        images: JULESNOEL_IMAGES.map(({id, src, thumbnail}) => ({
          src,
          thumbnail,
        }))
      }, {
        id: 'ripoche',
        name: 'Ripoche',
        street: '58 rue Maurice Ripoche',
        zipCode: '75014',
        city: 'PARIS',
        transport: 'Métro : Pernety (ligne 13) ou Mouton duvernet (ligne 4)',
        googleMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.302622056803!2d2.3208441156735016!3d48.83336607928511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671b45826c4f5%3A0x65f1d198b244797f!2s58+Rue+Maurice+Ripoche%2C+75014+Paris!5e0!3m2!1sfr!2sfr!4v1502403407448',
        images: RIPOCHE_IMAGES.map(({id, src, thumbnail}) => ({
          src,
          thumbnail,
        }))
      }, {
      id: 'reuilly',
      name: 'Reuilly diderot',
      street: '43 Allée Vivaldi',
      zipCode: '75012',
      city: 'PARIS',
      transport: 'Ligne 6 Métro Dugommier ou Ligne 8 Métro Montgallet',
      googleMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.8658238825124!2d2.3865663145800498!3d48.84169797928585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6726cc5d410cd%3A0x33802cac89a6ed60!2s43+All%C3%A9e+Vivaldi%2C+75012+Paris-12E-Arrondissement!5e0!3m2!1sfr!2sfr!4v1532900237396',
      images: REUILLY_IMAGES.map(({id, src, thumbnail}) => ({
        src,
        thumbnail,
      }))
    }];
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({stickyNav: false}));
  };

  _handleWaypointLeave = () => {
    this.setState(() => ({stickyNav: true}));
  };

  render() {

    return (
      <div>

        <Helmet title={'Les adresses des salles d\'entraînement | ' + get(this, 'props.data.site.siteMetadata.title')}>
        </Helmet>

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav}/>

        <div id="main">

          <section id="salles" className="main special">
            <span className="image main"><img src={picBandeau} alt="bandeau"/></span>

            <header className="major">
              <h1>Les salles</h1>
              <p>
                Voici les adresses des différentes salles parisiennes (dans le 12ème / 14ème),
                pour  pratiquer la Savate Boxe Française avec nous.
              </p>
              <div className="map-responsive">
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=17caxVnwoGG92sTQfPtVU9MuD6ett4Jdt" width="640" height="480"></iframe>
              </div>
            </header>

            <SallesSwipe salles={this.salles}/>

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
`;
