import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/bercy-01.png'
import picCharlemont from '../assets/images/charlemont.jpg'

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

                    <section id="planning" className="main">
                        <div className="spotlight">
                            <div className="content">
                                <header className="major">
                                    <h2>Planning</h2>
                                </header>
                                <p>Plusieurs horaires et salles sur paris sont proposés pour les entraînements tout au
                                    long de la semaine. Chaque adhérent accède à tous les créneaux afin de suivre les
                                    cours des différents moniteurs.</p>

                                <table class="alt">
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
                                        <td>12:00 - 13:00</td>
                                        <td>Jérôme</td>
                                        <td>Bercy</td>
                                    </tr>
                                    </tbody>
                                    <tfoot>
                                    </tfoot>
                                </table>

                                <ul className="actions">
                                    <li><Link to="/generic" className="button">Voir plus</Link></li>
                                </ul>
                            </div>
                            <span className="image"><img src={pic01} alt=""/></span>
                        </div>
                    </section>

                    <section id="savate" className="main special">
                        <header className="major">
                            <h2>La Savate</h2>
                        </header>



                        <p>

                            En 1820, des marins revenants d’Extrême Orient importèrent une tactique de combat qui connut un rapide succès dans les bas-fonds marseillais.
                            On la baptisa le chausson marseillais.
                            Un certain Michel dit « pisseux » étudia cette technique et conçut l’art de la savate.
                            La savate était pratiquée par les rôdeurs, les combattants tenaient les mains en avant et ne s’en servaient que pour relever le nez de leurs adversaires avec la paume de la main : c’était ce qu’on appelait « donner une musette ».
                            Ce fut Charles LECOUR qui eut l’idée géniale de combiner les coups de poing de la boxe anglaise aux coups de pieds de la savate française.
                            LECOUR était petit mais ses coups de poing étaient terribles et ses coups de pieds bas foudroyants de rapidité.
                            Vers 1860, Joseph Charlemont (1839 – 1914) codifia la boxe française en publiant en 1877 le 1er livre technique de Boxe Française
                            Celle-ci est enseignée dans l’armée, les écoles et les sociétés sportives et devient vers 1900 le sport national des français.
                            En 1899, combat historique de Charlemont (qui l’emporta) contre l’Anglais Driscoll, champion de boxe anglaise.
                            En 1913, Charlemont fils organisa un tournoi qualifié de championnat du monde
                            Jusqu’en 1914, la boxe française n’eut pas moins de 100 000 pratiquants.
                            <span className="image right">
                                <img src={picCharlemont} alt=""/>
                            </span>
                            A l’aube de la première guerre mondiale les tireurs de boxe française les plus connus, authentiques amateurs tel Georges CARPENTIER, se laissent séduire par la boxe anglaise et ses combats rémunérés.
                            En 1924 la boxe française connaîtra une brève embellie grâce aux jeux olympiques de Paris où elle est programmée en démonstration
                            Sous l’effet de la concurrence de la boxe anglaise professionnelle, la boxe française ne fait plus que survivre dans les années 1940.
                            Le renouveau survient en 1965 grâce à l’engouement des Français pour les arts martiaux, et en 1972, création de la fédération française nationale de boxe française, pour devenir en 1976 la fédération française de boxe française savate et disciplines assimilées.
                            On redécouvre la boxe française ; elle est considérée comme un art martial puisque l’esprit du combat est aussi important que le combat lui-même.
                            Aujourd’hui, en restant fidèle a ces valeurs originelles dont l’amateurisme, la fédération française de boxe française compte 45 000 licenciés, deux fois plus que son homologue anglaise, avec 45% de femmes.
                            La boxe française est un sport de l’époque qui touche les jeunes, qui se veut être le grand sport de combat de demain en étant le leader des sports pieds poings.
                            Et comme l’assure le président de la FFSBF « la boxe française permet à la fois une pratique ludique, une maîtrise corporelle en milieu urbain et une exigence sportive au plus haut niveau « .
                        </p>
                        <ul className="features">
                            <li>
                                <span className="icon major style1 fa-code"></span>
                                <h3>Ipsum consequat</h3>
                                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus
                                    veroeros sed consequat.</p>
                            </li>
                            <li>
                                <span className="icon major style3 fa-copy"></span>
                                <h3>Amed sed feugiat</h3>
                                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus
                                    veroeros sed consequat.</p>
                            </li>
                            <li>
                                <span className="icon major style5 fa-diamond"></span>
                                <h3>Dolor nullam</h3>
                                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus
                                    veroeros sed consequat.</p>
                            </li>
                        </ul>
                        <footer className="major">
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn More</Link></li>
                            </ul>
                        </footer>
                    </section>

                    <section id="club" className="main special">
                        <header className="major">
                            <h2>Le club</h2>
                            <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
                                posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
                        </header>
                        <ul className="statistics">
                            <li className="style1">
                                <span className="icon fa-archive"></span>
                                <strong>100</strong> adhérents
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
                        <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu
                            faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum
                            pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam
                            porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non
                            nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut
                            magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
                            scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur
                            lacinia.</p>
                        <footer className="major">
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn More</Link></li>
                            </ul>
                        </footer>
                    </section>

                    <section id="subscribe" className="main special">
                        <header className="major">
                            <h2>Inscription</h2>
                            <p>Vous êtes les bienvenus pour participer à un cours d’essai, il suffit de vous présenter
                                avec une tenue de sport à l’un des cours hebdomadaires.</p>
                        </header>
                        <footer className="major">
                            <ul className="actions">
                                <li><a href="https://www.e-cotiz.com/app/site/4682-Savate-Inscription%202017-2018"
                                          target="_blank" className="button special">Inscription en ligne</a></li>
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
