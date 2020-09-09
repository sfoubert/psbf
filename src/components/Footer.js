import React from 'react'
import picAffiliation from "../assets/images/club/affiliation-2020-2021.jpg";

const Footer = () => (
  <footer id="footer">
    <div className="section">
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
    </div>
    <div className="right">
      <img className="image affiliation" src={picAffiliation} alt="affiliation"/>
    </div>
    <p className="copyright">&copy; PSBF | Paris Savate Boxe Française</p>
  </footer>
)

export default Footer
