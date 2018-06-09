import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Aliquam sed mauris</h2>
            <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
            <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
            </ul>
        </section>
        <section>
            <h2>Contact</h2>
            <dl className="alt">
                <dt>Phone</dt>
                <dd>06 45 47 48 64</dd>
                <dt>Email</dt>
                <dd><a href="#">aspttparissavate@gmail.com</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://m.facebook.com/groups/aspttparissavate/" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
