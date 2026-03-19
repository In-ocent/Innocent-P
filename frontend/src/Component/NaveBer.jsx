import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";//animation
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Tooltip, Offcanvas } from "bootstrap";
import profile from "../assets/logo.jpg"; // adjust path

function NaveBer() {
    // DAY, NIGHT , SYSTEM MODE functionality 👇
    const [NDtoggle, stTogglON] = useState(false);
    const [theme, setTheme] = useState("system");
    // footer 
    const year = new Date().getFullYear();
    useEffect(() => {
        if (theme === 'system') {
            // check user system preference
            const prefersDark = window.matchMedia(("(prefers-color-scheme: dark)")).matches;
            document.documentElement.setAttribute("data-theme", prefersDark ? "night" : "light");
        } else {
            document.documentElement.setAttribute("data-theme", theme);
        }
    }, [theme]);

    // SOCIAL MEDIA TOGGLE 👇
    const [isSocialOn, setsoCaillOn] = useState(false);

    // toggle dropdown menu
    const handleThemeToggle = () => {
        stTogglON(!NDtoggle);
    };

    // toggle social icons
    const socialhandleToggle = () => {
        setsoCaillOn(!isSocialOn);
    };

    // Tooltip initialization
    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        const tooltips = Array.from(tooltipTriggerList).map(
            (el) =>
                new Tooltip(el, {
                    placement: "bottom",
                    fallbackPlacements: [],
                    boundary: "window",
                    offset: [0, 10],
                })
        );

        return () => {
            tooltips.forEach((tooltip) => tooltip.dispose());
        };
    }, []);

    // Close offcanvas on nav click
    const handleNavClick = () => {
        const offcanvasElement = document.getElementById("offcanvasWithBothOptions");
        const offcanvas =
            Offcanvas.getInstance(offcanvasElement) || new Offcanvas(offcanvasElement);
        offcanvas.hide();
    };

    return (
        <>
            <nav className="naveber fixed-top d-flex align-items-center justify-content-between py-2 px-3 ">
                {/* Left: Profile */}
                <div className="d-flex align-items-center gap-2">
                    <Link to="/home">
                        <div className="logo-desing">
                            <img className="logo-image" loading="lazy" src={profile} alt="Profile Logo" />
                        </div>
                    </Link>
                    <div className="logo-name-div d-md-block">
                        <h5 className="m-0 p-0 my-name">Paul Innocent</h5>
                        <p className="m-0 p-0 my-title">Full Stack Developer</p>
                    </div>
                </div>

                {/* Center: Nav Links (hidden on mobile) */}
                <ul className="list-unstyled d-none d-md-flex gap-2 align-items-center mb-0 ">
                    <li className="icons-hover">
                        <NavLink to="/home" className={({ isActive }) =>
                            `d-flex align-items-center gap-1 nav-link ${isActive ? "active" : ""}`
                        } >
                            <i className="bi bi-house "></i> <span>Home</span>
                        </NavLink>
                    </li>
                    <li className="icons-hover">
                        <NavLink to="/about" className={({ isActive }) => `d-flex align-items-center nav-link ${isActive ? "active" : ""}`}>
                            <i className="bi bi-person"></i> <span>About</span>
                        </NavLink>
                    </li>
                    <li className="icons-hover">
                        <NavLink to="/Services" className={({ isActive }) => `d-flex align-items-center nav-link ${isActive ? "active" : ""}`}>
                            <i class="bi bi-briefcase"></i> <span>Services</span>
                        </NavLink>
                    </li>
                    <li className="icons-hover">
                        <NavLink to="/projects" className={({ isActive }) => `d-flex align-items-center nav-link ${isActive ? "active" : ""}`}>
                            <i className="bi bi-file-earmark-code"></i> <span>Projects</span>
                        </NavLink>
                    </li>
                    <li className="icons-hover">
                        <NavLink to="/templates" className={({ isActive }) => `d-flex align-items-center nav-link ${isActive ? "active" : ""}`}>
                            <i className="bi bi-box2"></i> <span>Templates</span>
                        </NavLink>
                    </li>
                    <li className="icons-hover">
                        <NavLink to="/contact" className={({ isActive }) => `d-flex align-items-center nav-link ${isActive ? 'active' : ""}`}>
                            <i className="bi bi-chat-left"></i> <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>

                {/* Right: Coffee + Mobile Toggle */}
                <div className="d-flex align-items-center gap-3">
                    <NavLink
                        to="/support"
                        className="container-coffee coffee d-flex align-items-center justify-content-center p-2"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Buy Me a Coffee ☕"
                    >
                        <i className="bi bi-cup-hot fs-5"></i>
                    </NavLink>

                    <button
                        className="navbar-toggler d-md-none border-0"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasWithBothOptions"
                        aria-controls="offcanvasWithBothOptions"
                    >
                        <i className="bi bi-list fs-3"></i>
                    </button>
                </div>

                {/* Offcanvas Menu (Mobile) */}
                <div
                    className="offcanvas offcanvas-end"
                    tabIndex="-1"
                    id="offcanvasWithBothOptions"
                    aria-labelledby="offcanvasWithBothOptionsLabel"
                    data-bs-backdrop="false"
                    data-bs-scroll="false"
                >
                    <div className="offcanvas-header">
                        <div className="d-flex align-items-center gap-2">
                            <div className="logo-desing">
                                <img className="logo-image" src={profile} alt="Profile Logo" />
                            </div>
                            <div>
                                <h5 className="m-0 p-0 my-name">Paul Innocent</h5>
                                <p className="my-title m-0 p-0 my-tile">Full Stack Developer</p>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn-close close-btn-left"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav gap-3 mb-4">
                            <li>
                                <NavLink
                                    to="/home"
                                    className="nav-link icons-hover"
                                    onClick={handleNavClick}
                                >
                                    <i className="bi bi-house"></i> Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/Services"
                                    className="nav-link icons-hover"
                                    onClick={handleNavClick}
                                >
                                    <i class="bi bi-briefcase"></i> Services
                                </NavLink>
                            </li>
                            {/* <li className="icons-hover">
                        <NavLink to="/Services" className={({ isActive }) => `d-flex align-items-center nav-link ${isActive ? "active" : ""}`}>
                            <i class="bi bi-briefcase"></i> <span>Services</span>
                        </NavLink>
                    </li> */}
                            <li>
                                <NavLink
                                    to="/projects"
                                    className="nav-link icons-hover"
                                    onClick={handleNavClick}
                                >
                                    <i className="bi bi-file-earmark-code"></i> Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className="nav-link icons-hover"
                                    onClick={handleNavClick}
                                >
                                    <i className="bi bi-person"></i> About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/templates"
                                    className="nav-link icons-hover"
                                    onClick={handleNavClick}
                                >
                                    <i className="bi bi-box2"></i> Templates
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className="nav-link icons-hover"
                                    onClick={handleNavClick}
                                >
                                    <i className="bi bi-chat-left"></i> Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/support"
                                    className="nav-link icons-hover"
                                    onClick={handleNavClick}
                                    title="Buy Me a Coffee ☕"
                                >
                                    <i className="bi bi-cup-hot fs-5"></i>Support
                                </NavLink>
                            </li>
                        </ul>
                        <hr />
                        {/* Mobile  */}
                        <div className=" moble-icon-container d-flex align-items-center gap-3 mb-3">
                            <a href="https://github.com/In-ocent" target="_blank" rel="noopener noreferrer" className="mobile-icon icons-hover">
                                <i className="bi bi-github fs-4"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/paul-innocent/" target="_blank" rel="noopener noreferrer" className="mobile-icon icons-hover">
                                <i className="bi bi-linkedin fs-4"></i>
                            </a>
                            <a href="https://x.com/InnoDev_code" target="_blank" rel="noopener noreferrer" className="mobile-icon icons-hover">
                                <i className="bi bi-twitter fs-4"></i>
                            </a>
                            <a href="https://www.facebook.com/paulinnocent48" target="_blank" rel="noopener noreferrer" className="mobile-icon icons-hover">
                                <i className="bi bi-facebook fs-4"></i>
                            </a>
                            <a href="https://www.instagram.com/paulinnocent48/" target="_blank" rel="noopener noreferrer" className="mobile-icon icons-hover">
                                <i className="bi bi-instagram fs-4"></i>
                            </a>
                            <a className="mobile-icon icons-hover disabled">
                                <i className="bi bi-youtube"></i>
                            </a>
                            <a href="https://www.tiktok.com/@victor_coda16" target="_blank" rel="noopener noreferrer" className="mobile-icon icons-hover ml-2">
                                <i className="bi bi-tiktok"></i>
                            </a>
                        </div>
                        <hr />
                        {/* mobe night/ Day */}
                        <button
                            className="theme-toggle  mobile_swich "
                            onClick={() => setTheme(theme === "light" ? "night" : "light")}
                        >
                            {theme === "light" ? "🌙 Night Mode" : "🌞 Light Mode"}
                        </button>
                        {/* ☝️*/}
                        <div className="offcanvas-footer py-2">

                            <NavLink
                                to="/support"
                                className="container-coffee d-flex align-items-center justify-content-center p-2 coffee"
                                data-bs-toggle="tooltip"
                                onClick={handleNavClick}
                                data-bs-placement="bottom"
                                title="Buy Me a Coffee ☕"
                            >
                                <i className="bi bi-cup-hot fs-5"></i>
                            </NavLink>
                        </div>
                    </div>
                    <p className="text-center my-title mt-2 ">
                        © {year} Paul Innocent. All rights reserved.
                    </p>
                </div>
            </nav>

            {/* Toggle button */}
            <div className="contact_info">
                {/* socail media icon */}
                <div className="social-media-icon ">
                    {isSocialOn && (<div className="social-media-container show ">
                        {/* tiktok */}
                        <a href="https://www.tiktok.com/@victor_coda16" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-tiktok"></i>
                        </a>
                        {/* Youtube */}
                        <a href="https://www.youtube.com/@victor_coda16" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-youtube"></i>
                        </a>
                        {/* instagram */}
                        <a href="https://www.instagram.com/paulinnocent48/" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-instagram"></i>
                        </a>
                        {/* linkedin */}
                        <a href="https://www.linkedin.com/in/paul-innocent/" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-linkedin"></i>
                        </a>
                        {/* github */}
                        <a href="https://github.com/In-ocent" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-github"></i>
                        </a>
                        {/* twitter-x X */}
                        <a href="https://x.com/InnoDev_code" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-twitter-x"></i>
                        </a>

                    </div>)}
                    {/* icons display on ondisplay👇 */};

                    <div className='share-holder' onClick={socialhandleToggle} >
                        {/* share icon here 👇 */}
                        <span className='share-icon toggle'

                        >
                            <i class="bi bi-share"></i>
                        </span>
                    </div>
                </div>
                {/* social media end here ☝️ */}
                <div className='day-light'>
                    {/* here 👇 is alabout night and ada */}
                    {NDtoggle && (<div className="dive-container show ">
                        <span className='system ' onClick={() => { setTheme('light'); stTogglON(false) }} >
                            <i class="px-1 bi bi-brightness-high"></i>
                            Light
                        </span>
                        <span className='system' onClick={() => { setTheme('night'); stTogglON(false) }} >
                            <i class="px-1 bi bi-moon"></i>
                            Dark
                        </span>
                        <span className='system' onClick={() => { setTheme("system"); stTogglON(false) }}>
                            <i class="px-1 bi bi-pc-display"></i>
                            system
                        </span>
                    </div>)}
                    {/* night day end here ☝️ */}
                    <span className='brigt-higt' title='Daylight Mode' onClick={handleThemeToggle} >
                        <a href="#">
                            <i class=" px-1 bi bi-brightness-high "></i>
                        </a>
                    </span>
                </div>

                {/* whatsap link 👇 */}
                <span className='whatsapp' >
                    <a href='https://wa.me/+2348136471776'
                        target="_blank" rel="noopener noreferrer">
                        <i class="px-1 bi bi-whatsapp"></i>
                    </a>
                </span>
            </div>
        </>
    );
}

export default NaveBer;
