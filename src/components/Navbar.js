import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";


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
    useEffect(() => {

        window.onscroll = function () { myFunction() };

        // Get the navbar
        var navbar = document.getElementsByClassName("navbar")[0];

        // Get the offset position of the navbar
        var sticky = navbar.offsetTop;

        // Add the sticky className to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function myFunction() {
            if (window.pageYOffset > sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }
    }, [])

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
        <nav className="tw-bg-gradient-to-r tw-from-[rgba(74,63,63,1)] tw-to-[rgba(102,0,33,1)] tw-h-fit tw-overflow-hidden tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-50 navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="tw-flex tw-justify-start tw-list-none tw-min-h-[3rem] tw-items-center tw-pl-0 tw-w-[27rem] tw-m-auto mxs:tw-w-fit navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="tw-mx-[5%] nav-item" onClick={() => activate('home')} >
                            <Link className="tw-no-underline tw-font-bold tw-text-xl tw-text-white tw-cursor-pointer hover:tw-text-gray-500" exact to='/' id="home">Home</Link>
                        </li>
                        <li className=" tw-mx-[5%] nav-item" onClick={() => activate('about')}>
                            <Link className="tw-no-underline tw-font-bold tw-text-xl tw-text-white tw-cursor-pointer hover:tw-text-gray-500" id="about" to='/about' >About</Link>
                        </li>
                        <li className="tw-mx-[5%] nav-item" onClick={() => activate('skills')}>
                            <Link className="tw-no-underline tw-font-bold tw-text-xl tw-text-white tw-cursor-pointer hover:tw-text-gray-500" id="skills" to='/skills' >Skills</Link>
                        </li>
                        <li className="tw-mx-[5%] nav-item" onClick={() => activate('projects')} >
                            <Link className="tw-no-underline tw-font-bold tw-text-xl tw-text-white tw-cursor-pointer hover:tw-text-gray-500" id="projects" to='/projects' >Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
