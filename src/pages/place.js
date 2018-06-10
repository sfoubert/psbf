import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderPlace from '../components/HeaderPlace'
import pic04 from '../assets/images/pic04.jpg'

class Place extends React.Component {
    render() {

        return (
            <div>
                <Helmet title={get(this, 'props.data.site.siteMetadata.title')}/>

                <HeaderPlace/>
                <div id="main">

                    <section id="first" className="main special">
                        <span className="image main"><img src={pic04} alt=""/></span>
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
                    </section>

                    <section id="second" className="main special">
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

                    <section id="third" className="main special">
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
                    </section>

                    <section id="fourth" className="main special">
                        <header className="major">
                            <h2>SALLE PARIS BERCY 12</h2>
                            <p>
                                10 Place Léonard Bernstein<br/>
                                75012 Paris<br/>
                                Métro : Ligne 6 (arrêt Bercy) - Ligne 14 (arrêt Cour Saint Emilion)<br/>
                                Accès : la salle se situe sous les grands escaliers qui mènent à la passerelle vers la
                                BNF, à côté des machines de musculation extérieures
                            </p>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.126610206226!2d2.3787305635587845!3d48.83672362261667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e672165e5225e1%3A0x92ed9bae0d379c47!2s10+Place+L%C3%A9onard+Bernstein%2C+75012+Paris!5e0!3m2!1sfr!2sfr!4v1505861471128"
                                width="600" height="450" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>
                        </header>
                    </section>

                </div>
            </div>
        )
    }
}

export default Place

export const pageQuery = graphql`
  query PlaceQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
