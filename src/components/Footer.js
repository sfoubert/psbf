import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Contact</h2>
            <dl className="alt">
                <dt>Téléphone</dt>
                <dd>07 77 86 30 43</dd>
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
