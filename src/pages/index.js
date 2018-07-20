import React from 'react'
import Link from 'gatsby-link'
import Waypoint from 'react-waypoint'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Gallery from "../components/Gallery";
import BlogPosts from '../components/BlogPosts'

import picBandeau from '../assets/images/bercy-01.jpg'

import picClub01 from '../assets/images/club/assaut-01.jpg'
import picClub02 from '../assets/images/club/assaut-02.jpg'
import picClub03 from '../assets/images/club/assaut-03.jpg'
import picClub04 from '../assets/images/club/assaut-04.jpg'
import picClub05 from '../assets/images/club/assaut-05.jpg'
import picClub06 from '../assets/images/club/assaut-06.jpg'

import thumbClub01 from '../assets/images/club/thumb/assaut-01.jpg'
import thumbClub02 from '../assets/images/club/thumb/assaut-02.jpg'
import thumbClub03 from '../assets/images/club/thumb/assaut-03.jpg'
import thumbClub04 from '../assets/images/club/thumb/assaut-04.jpg'
import thumbClub05 from '../assets/images/club/thumb/assaut-05.jpg'
import thumbClub06 from '../assets/images/club/thumb/assaut-06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: picClub01, thumbnail: thumbClub01, caption: 'Challenge IDF', description: 'Compétition régionale à partir de gant rouge'},
    { id: '6', src: picClub06, thumbnail: thumbClub06, caption: 'Photo de cours', description: 'Des cours durant les vacances scolaires et l\'été'},
    { id: '5', src: picClub05, thumbnail: thumbClub05, caption: 'Photo de cours', description: 'Du renforcement musculaire, de la préparation physique'},
    { id: '3', src: picClub03, thumbnail: thumbClub03, caption: 'Photo de cours', description: 'Des assauts libres contrôlés, techniques et sans puissance'},

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
    };

    _handleWaypointLeave = () => {
        this.setState(() => ({stickyNav: true}));
    };

    render() {
        const posts = get(this, 'props.data.allMarkdownRemark.edges');

        return (
            <div>
                <Header />

                <Helmet
                    title={get(this, 'props.data.site.siteMetadata.title') + ' | Présentation du club et les dernières actualités'}>
                </Helmet>

                <Waypoint
                    onEnter={this._handleWaypointEnter}
                    onLeave={this._handleWaypointLeave}
                >
                </Waypoint>
                <Nav sticky={this.state.stickyNav}/>

                <div id="main">

                    <section id="club" className="main special">

                        <span className="image main"><img src={picBandeau} alt="bandeau"/></span>

                        <header className="major">
                            <h1>Le club</h1>
                            <p>
                                La rentrée sportive de notre section Boxe Française aura lieu le
                                &nbsp;<strong>lundi 3 septembre 2018</strong>. <br/>
                                Consultez la <Link to="/faq-2018-2019">FAQ</Link> pour plus d'informations.
                            </p>
                            <p>
                                PSBF est un club parisien composé d'enseignants expérimentés et passionnés.
                                Les cours sont tout niveaux, et ouverts aussi bien aux loisirs et aux compétiteurs.
                            </p>
                            <p>
                                Retrouvez sur ce site la présentation du club, les horaires et les adresses des différentes
                                salles sur Paris. L'inscription annuelle, permet d'accèder à l'ensemble des créneaux et
                                salles proposées sur Paris.
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

                    </section>

                    <section id="actualites" className="main special">

                        <h2>Actualités</h2>
                        <BlogPosts posts={posts}/>

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
};

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY", locale: "fr")
            title
          }
        }
      }
    }
  }
`;
