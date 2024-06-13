import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav= ()=> (
    <nav>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/Portfolio'>Portfolio</NavLink>
            </li>
            <li>
                <NavLink to='/Resume'>Resume</NavLink>
            </li>
            <li>
                <NavLink to='/Contact'>Contact Me</NavLink>
            </li>
        </ul>
    </nav>
);

export default Nav;

