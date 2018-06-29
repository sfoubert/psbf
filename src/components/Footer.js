import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Contact</h2>
            <dl className="alt">
                <dt>Phone</dt>
                <dd>06 45 47 48 64</dd>
                <dt>Email</dt>
                <dd><a href="#">parissavate@gmail.com</a></dd>
            </dl>
            <ul className="icons">
                <li>
                    <a href="https://www.facebook.com/groups/1028797570612471/" className="icon fa-facebook alt">
                        <span className="label">Facebook</span>
                    </a>
                </li>
            </ul>
        </section>
        <p className="copyright">&copy; PSBF | Paris Savate Boxe Française</p>
    </footer>
)

export default Footer
