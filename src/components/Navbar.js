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
                <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" onClick={() => activate('home')} >
                    <Link exact to='/' id="home">Home</Link>
                </li>
                <li class="nav-item" onClick={() => activate('about')}>
                    <Link id="about" to='/about' >About</Link>
                </li>
                <li class="nav-item" onClick={() => activate('skills')}>
                    <Link id="skills" to='/skills' >Skills</Link>
                </li>
                <li class="nav-item" onClick={() => activate('projects')} >
                    <Link id="projects" to='/projects' >Projects</Link>
                </li>
                {/* <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li> */}
            </ul>
            </div>
        </div>
        </nav>

    )
}
