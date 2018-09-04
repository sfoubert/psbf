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
  };

  _handleWaypointLeave = () => {
    this.setState(() => ({stickyNav: true}));
  };

  render() {

    return (
      <div>
        <Helmet
          title={'Inscription pour la saison sportive ou cours d\'essai | ' + get(this, 'props.data.site.siteMetadata.title')}>
        </Helmet>

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav}/>

        <div id="main">

          <section id="inscription" className="main special">

            <span className="image main"><img src={picBandeau} alt="bandeau"/></span>

            <header className="major">
              <h1>Inscription</h1>
              <p>
                Vous êtes les bienvenus pour participer à un cours d’essai, il suffit de vous présenter
                avec une tenue de sport à l’un des cours hebdomadaires. Venez avec une tenue de sport et
                des baskets propres, nous prêtons les gants ! Pour cela un simple sms au 07 77 86 30 43
                pour confirmer votre présence suffit.
              </p>

              <p>
                L'inscription vous donne accès à l'intégralité de nos cours qui sont dispensés dans nos
                différentes salles parisiennes ( 12ème / 14ème / 20ème ).
              </p>

            </header>
            <footer className="major">
              <ul className="actions">
                <li><a href="https://www.e-cotiz.com/app/site/7839"
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
};

export default Inscription

export const pageQuery = graphql`
  query InscriptionQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
