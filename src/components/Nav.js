import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['planning', 'savate', 'club', 'subscribe'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="planning">
                    <a href="#">Planning</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="savate">
                    <a href="#">La Savate</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="club">
                    <a href="#">Le club</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="subscribe">
                    <a href="#">Inscription</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
