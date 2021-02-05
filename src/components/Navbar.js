import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function Navbar() {
    let url = window.location.href.split('/');
    let size = window.location.href.split('/').length;
    let cut;
    let pages = ['projects', 'skills', 'about'];
    if (pages.indexOf(url[size - 1]) == -1) {
        cut = 'home';
    } else {
        cut = url[size - 1];
    }

    const [active, setActive] = useState(cut);
    useEffect(() => {

        document.getElementById(active).classList.add('activenav');
    }, [])
    const activate = (id) => {
        document.getElementById(active).classList.remove('activenav');
        document.getElementById(id).classList.add('activenav');
        setActive(id);
        console.log(id);
    }
    return (
        <nav>
            <ul>
                <li onClick={() => activate('home')} >
                    <Link exact to='/' id="home">Home</Link>
                </li>
                <li onClick={() => activate('about')}>
                    <Link id="about" to='/about' >About</Link>
                </li>
                <li onClick={() => activate('skills')}>
                    <Link id="skills" to='/skills' >Skills</Link>
                </li>
                <li onClick={() => activate('projects')} >
                    <Link id="projects" to='/projects' >Projects</Link>
                </li>
            </ul>

        </nav>

    )
}
