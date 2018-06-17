import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'

import picBandeau from '../assets/images/bercy-01.jpg'

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
                <Helmet title={get(this, 'props.data.site.siteMetadata.title')}/>

                <Header />

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
                        </header>
                        <ul className="statistics">
                            <li className="style1">
                                <span className="icon fa-archive"></span>
                                <strong>120</strong> adhérents
                            </li>
                            <li className="style2">
                                <span className="icon fa-users"></span>
                                <strong>40%</strong> féminines
                            </li>
                            <li className="style3">
                                <span className="icon fa-copy"></span>
                                <strong>9</strong> moniteurs fédéraux
                            </li>
                            <li className="style4">
                                <span className="icon fa-diamond"></span>
                                <strong>Label OR</strong> Savate pour tous
                            </li>
                            <li className="style5">
                                <span className="icon fa-diamond"></span>
                                <strong>Label OR</strong> Performance
                            </li>
                        </ul>

                        <p>
                            Les couleurs du club sont le Bleu et Rouge.
                        </p>

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
