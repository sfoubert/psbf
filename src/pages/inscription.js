import React from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import Nav from '../components/Nav';

import picBandeau from '../assets/images/inscription/bandeau.jpg';
import picAncv1 from '../assets/images/inscription/ancv1.png';
import picAncv2 from '../assets/images/inscription/ancv2.png';
import picSponsor01 from '../assets/images/sponsors/bet-capet.png';

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
                Vous êtes les bienvenus pour participer à un cours d’essai. Pour cela un simple sms au 07 77 86 30 43
                pour confirmer votre présence suffit. Venez avec une tenue de sport et des baskets propres, nous prêtons
                les gants :)
              </p>

              <p>
                L&apos;inscription vous donne accès à l&apos;intégralité de nos cours qui sont dispensés dans nos
                différentes salles parisiennes ( 12ème / 14ème).
              </p>

            </header>
            <footer className="major">
              <ul className="actions">
                <li><a href="https://app.joinly.com/app/member/web-site/5f4421952a1d2166c40b1979"
                       target="_blank" rel="noopener noreferrer" className="button special">&gt;&gt; Inscription en
                  ligne &lt;&lt;</a></li>
              </ul>
              <span>
                <img className="image ancv" src={picAncv1} alt="ANCV 1"/>
                <img className="image ancv" src={picAncv2} alt="ANCV 2"/>
              </span>
              </footer>
          </section>

          <section id="sponsors" className="main special">
              <h2>Sponsors</h2>

            <p>
              L&apos;équipe PSBF remercie ses partenaires et sponsors qui nous apportent leur engagement et leur soutien.
              Si vous souhaitez vous nous soutenir, n’hésitez pas à nous écrire pour recevoir notre dossier de sponsoring.
            </p>

            <ul className="features">
              <li>
                <span>
                  <a href="http://www.bet-capet.com/" target="_blank" rel="noopener noreferrer">
                    <img className="image main" src={picSponsor01} alt="BET Ingenierie"/>
                  </a>
                </span>
              </li>
            </ul>

          </section>

        </div>

      </div>
    )
  }
}

Inscription.propTypes = {
  route: PropTypes.object,
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
