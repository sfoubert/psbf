import React from 'react'
import Link from 'gatsby-link'
import Waypoint from 'react-waypoint'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Nav from '../components/Nav'
import Gallery from "../components/Gallery";

import picBandeau from '../assets/images/salles/ripoche-01.jpg'

import picSavate01 from '../assets/images/savate/assaut-01.jpg'
import picSavate02 from '../assets/images/savate/assaut-02.jpg'
import picSavate03 from '../assets/images/savate/assaut-03.jpg'
import picSavate04 from '../assets/images/savate/assaut-04.jpg'
import picSavate05 from '../assets/images/savate/assaut-05.jpg'
import picCharlemont from '../assets/images/savate/charlemont.jpg'

import picGantBleu from '../assets/images/grades/gant_bleu.jpg'
import picGantVert from '../assets/images/grades/gant_vert.jpg'
import picGantRouge from '../assets/images/grades/gant_rouge.jpg'
import picGantBlanc from '../assets/images/grades/gant_blanc.jpg'
import picGantJaune from '../assets/images/grades/gant_jaune.jpg'
import picGantArgent from '../assets/images/grades/gant_argent.jpg'

const DEFAULT_IMAGES = [
    {id: '1', src: picSavate01, thumbnail: picSavate01},
    {id: '2', src: picSavate02, thumbnail: picSavate02},
    {id: '5', src: picSavate05, thumbnail: picSavate05},
];

class Savate extends React.Component {
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

                <Helmet title={'Savate | ' + get(this, 'props.data.site.siteMetadata.title')}>
                </Helmet>

                <Waypoint
                    onEnter={this._handleWaypointEnter}
                    onLeave={this._handleWaypointLeave}
                >
                </Waypoint>
                <Nav sticky={this.state.stickyNav}/>

                <div id="main">

                    <section id="savate" className="main special">
                        <span className="image main"><img src={picBandeau} alt=""/></span>
                        <header className="major">
                            <h1>La Savate</h1>
                        </header>

                        <p>
                            La Savate Boxe Française est un sport de combat pieds-poings basés sur des mouvements de
                            percussions qui permettent de frapper avec les différentes surfaces des pieds et des poings
                            suivant des techniques codifiées. Chaque mouvement appelé “coup” respecte la règle des 4 E :
                            Ethique, Esthétique, Efficace et Educatif.
                        </p>
                        <p>
                            On distingue deux pratiques de la discipline : l’assaut et le combat. L’assaut est une
                            rencontre opposant deux tireurs de même sexe et de même poids, qui se juge sur la maîtrise
                            technique, le style, la précision des touches dont toute puissance doit être exclue. Le
                            combat est une rencontre opposant deux tireurs de même sexe et de poids identique, qui se
                            juge sur la technique, la précision, mais aussi l’efficacité des coups, et la combativité
                            des tireurs.
                        </p>
                        <p>
                            La Savate Boxe Française est partie intégrante du patrimoine culturel immatériel français.
                            Elle trouve ses origines au XIXe siècle.
                        </p>

                        <Gallery images={DEFAULT_IMAGES.map(({id, src, thumbnail}) => ({
                            src,
                            thumbnail,
                        }))}/>
                    </section>

                    <section id="origines" className="main special">
                        <header className="major">
                            <h2>Les origines</h2>
                        </header>

                        <div>
                            <p>
                                En 1820, des marins revenants d’Extrême Orient importèrent une tactique de
                                combat qui
                                connut un rapide succès dans les bas-fonds marseillais. On la baptisa le
                                chausson marseillais.
                                Un certain Michel dit « pisseux » étudia cette technique et conçut l’art de la
                                savate.
                                La savate était pratiquée par les rôdeurs, les combattants tenaient les mains en
                                avant
                                et ne s’en servaient que pour relever le nez de leurs adversaires avec la paume
                                de la
                                main : c’était ce qu’on appelait « donner une musette ».
                                Ce fut Charles LECOUR qui eut l’idée géniale de combiner les coups de poing de
                                la boxe
                                anglaise aux coups de pieds de la savate française.
                                LECOUR était petit mais ses coups de poing étaient terribles et ses coups de
                                pieds bas
                                foudroyants de rapidité.
                                Vers 1860, Joseph Charlemont (1839 – 1914) codifia la boxe française en publiant
                                en 1877
                                le 1er livre technique de Boxe Française.
                                Celle-ci est enseignée dans l’armée, les écoles et les sociétés sportives et
                                devient
                                vers 1900 le sport national des français.
                                En 1899, combat historique de Charlemont (qui l’emporta) contre l’Anglais
                                Driscoll,
                                champion de boxe anglaise.
                            </p>


                            <ul className="features">
                                <li>
                                    <span className="image main">
                                        <img src={picCharlemont} alt="Charlemont"/>
                                    </span>
                                </li>
                            </ul>

                        </div>
                        <p>
                            En 1913, Charlemont fils organisa un tournoi qualifié de championnat du monde
                            Jusqu’en 1914, la boxe française n’eut pas moins de 100 000 pratiquants.
                            A l’aube de la première guerre mondiale les tireurs de boxe française les plus
                            connus,
                            authentiques amateurs tel Georges CARPENTIER, se laissent séduire par la boxe
                            anglaise
                            et ses combats rémunérés.
                            En 1924 la boxe française connaîtra une brève embellie grâce aux jeux olympiques
                            de
                            Paris où elle est programmée en démonstration
                            Sous l’effet de la concurrence de la boxe anglaise professionnelle, la boxe
                            française ne
                            fait plus que survivre dans les années 1940.
                            Le renouveau survient en 1965 grâce à l’engouement des Français pour les arts
                            martiaux,
                            et en 1972, création de la fédération française nationale de boxe française,
                            pour devenir
                            en 1976 la fédération française de boxe française savate et disciplines
                            assimilées.
                            On redécouvre la boxe française ; elle est considérée comme un art martial
                            puisque
                            l’esprit du combat est aussi important que le combat lui-même.
                            Aujourd’hui, en restant fidèle a ces valeurs originelles dont l’amateurisme, la
                            fédération française de boxe française compte 45 000 licenciés, deux fois plus
                            que son homologue anglaise, avec 45% de femmes.
                            La boxe française est un sport de l’époque qui touche les jeunes, qui se veut
                            être le
                            grand sport de combat de demain en étant le leader des sports pieds poings.
                            Et comme l’assure le président de la FFSBF « la boxe française permet à la fois
                            une pratique ludique, une maîtrise corporelle en milieu urbain et une exigence
                            sportive au plus haut niveau
                        </p>
                    </section>

                    <section id="grades" className="main special">
                        <header className="major">
                            <h2>Les grades</h2>
                        </header>
                        <p>
                            Plusieurs sessions de passages de grades ont lieu durant la saison sportive, afin
                            d'evaluer les acquis et définir de nouveaux objectifs
                        </p>
                        <ul className="features">
                            <li>
                                    <span className="image main">
                                        <a href="grades/gant_bleu.pdf" target="_blank">
                                            <img src={picGantBleu} alt="gant bleu"/></a>
                                    </span>
                                <h3>Gant Bleu</h3>
                                <p>Je touche et je ne suis pas touché</p>
                            </li>
                            <li>
                                    <span className="image main">
                                        <a href="grades/gant_vert.pdf" target="_blank">
                                            <img src={picGantVert} alt="gant vert"/></a>
                                    </span>
                                <h3>Gant Vert</h3>
                                <p>« Je ne suis pas touché et je touche » Situations simples</p>
                            </li>
                            <li>
                                    <span className="image main">
                                        <a href="grades/gant_rouge.pdf" target="_blank">
                                            <img src={picGantRouge} alt="gant rouge"/>
                                        </a>
                                    </span>
                                <h3>Gant Rouge</h3>
                                <p>« Je ne suis pas touché et je touche » Situations complexes</p>
                            </li>
                            <li>
                                    <span className="image main">
                                        <a href="grades/gant_blanc.pdf" target="_blank">
                                            <img src={picGantBlanc} alt="gant blanc"/>
                                        </a>
                                    </span>
                                <h3>Gant Blanc</h3>
                                <p>« Je touche avant d’être touché »</p>
                            </li>
                            <li>
                                    <span className="image main">
                                        <a href="grades/gant_jaune.pdf" target="_blank">
                                            <img src={picGantJaune} alt="gant jaune"/>
                                        </a>
                                    </span>
                                <h3>Gant Jaune</h3>
                                <p>« Je perturbe pour toucher et je maîtrise tous les thèmes et la gestuelle de
                                    la progression technique (gants de couleur) ».</p>
                            </li>
                            <li>
                                    <span className="image main"><a href="grades/gat_1.pdf" target="_blank">
                                        <img src={picGantArgent} alt="gant d'argent technique"/></a>
                                    </span>
                                <h3>Gant d'argent</h3>
                                <p>Niveau expert</p>
                            </li>
                        </ul>

                        <footer className="major">
                            <ul className="actions">
                                <li><Link to="/planning" className="button">Le planning</Link></li>
                            </ul>
                        </footer>

                    </section>

                </div>
            </div>
        )
    }
}

Savate.propTypes = {
    route: React.PropTypes.object,
}

export default Savate

export const pageQuery = graphql`
  query SavateQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
