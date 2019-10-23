import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Waypoint from 'react-waypoint';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import Nav from '../components/Nav';
import Gallery from "../components/Gallery";

import picBandeau from '../assets/images/planning/bandeau.png';

import picHoraires from '../assets/images/planning/horaires.png';
import picProf01 from '../assets/images/profs/dom-01.jpg';
import picProf02 from '../assets/images/profs/dom-02.jpg';
import picProf03 from '../assets/images/profs/jeremie-01.jpg';
import picProf04 from '../assets/images/profs/malika-brahim-01.jpg';
import picProf05 from '../assets/images/profs/antoine-01.jpg';
import picProf06 from '../assets/images/profs/maria-01.jpg';
import picProf07 from '../assets/images/profs/seb-01.jpg';
import picProf08 from '../assets/images/profs/seb-dom-jerome-01.jpg';

import thumbProf01 from '../assets/images/profs/thumb/dom-01.jpg';
import thumbProf02 from '../assets/images/profs/thumb/dom-02.jpg';
import thumbProf03 from '../assets/images/profs/thumb/jeremie-01.jpg';
import thumbProf04 from '../assets/images/profs/thumb/malika-brahim-01.jpg';
import thumbProf05 from '../assets/images/profs/thumb/antoine-01.jpg';
import thumbProf06 from '../assets/images/profs/thumb/maria-01.jpg';
import thumbProf07 from '../assets/images/profs/thumb/seb-01.jpg';
import thumbProf08 from '../assets/images/profs/thumb/seb-dom-jerome-01.jpg';

const DEFAULT_IMAGES = [
    {id: '2', src: picProf02, thumbnail: thumbProf02},
    {id: '3', src: picProf03, thumbnail: thumbProf03},
    {id: '4', src: picProf04, thumbnail: thumbProf04},
    {id: '6', src: picProf06, thumbnail: thumbProf06},
    {id: '7', src: picProf07, thumbnail: thumbProf07},
    {id: '5', src: picProf05, thumbnail: thumbProf05},
    {id: '8', src: picProf08, thumbnail: thumbProf08},
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
  };

  _handleWaypointLeave = () => {
    this.setState(() => ({stickyNav: true}));
  };

  render() {

    return (
      <div>

        <Helmet title={'Le planning horaire et les moniteurs | ' + get(this, 'props.data.site.siteMetadata.title')}>
        </Helmet>

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav}/>

        <div id="main">

          <section id="planning" className="main special">
            <span className="image main"><img src={picBandeau} alt="bandeau"/></span>

            <div className="main special">
              <header className="major">
                <h1>Le planning</h1>
              </header>
              <p>Plusieurs horaires et salles sur paris sont proposés pour les entraînements tout au
                long de la semaine. Chaque adhérent accède à tous les créneaux afin de suivre les
                cours des différents moniteurs et monitrices. Pensez à arriver 15min avant le début
                de la séance pour vous changer.
              </p>

              <p>
                <span><img className="image main" src={picHoraires} alt="horaires"/></span>
              </p>

              <div>
                <table>
                  <thead>
                  <tr>
                    <th>Jour</th>
                    <th>Horaire</th>
                    <th>Salle</th>
                    <th>Description</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Lundi</td>
                    <td>19:00 - 20:00</td>
                    <td>Bercy</td>
                    <td>Savate compétiteurs</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>20:00 - 21:30</td>
                    <td>Bercy</td>
                    <td>Savate tout niveau</td>
                  </tr>
                  <tr>
                    <td>Mardi</td>
                    <td>20:30 - 22:30</td>
                    <td>Jules Noël</td>
                    <td>Savate tout niveau</td>
                  </tr>
                  <tr>
                    <td>Mercredi</td>
                    <td>18:30 - 19:30</td>
                    <td>Bercy</td>
                    <td>Savate compétiteurs</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>19:30 - 21:00</td>
                    <td>Bercy</td>
                    <td>Savate tout niveau</td>
                  </tr>
                  <tr>
                    <td>Jeudi</td>
                    <td>18:30 - 19:00</td>
                    <td>Ripoche</td>
                    <td>Préparation physique</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>19:00 - 20:30</td>
                    <td>Ripoche</td>
                    <td>Savate tout niveau</td>
                  </tr>
                  <tr>
                    <td>Vendredi</td>
                    <td>19:00 - 20:30</td>
                    <td>Reuilly</td>
                    <td>Savate tout niveau</td>
                  </tr>
                  <tr>
                    <td>Samedi</td>
                    <td>10:00 - 12:00</td>
                    <td>Bercy</td>
                    <td>Savate tout niveau et compétiteurs</td>
                  </tr>
                  </tbody>
                  <tfoot>
                  </tfoot>
                </table>
              </div>

            </div>

          </section>


          <section id="profs" className="main special">

            <div className="content">
              <header className="major">
                <h2>Les monitrices et moniteurs</h2>
              </header>

              <Gallery images={DEFAULT_IMAGES.map(({id, src, thumbnail}) => ({
                src,
                thumbnail,
              }))}/>

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
  route: PropTypes.object,
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
`;
