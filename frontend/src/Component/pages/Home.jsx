import { useTypewriter, Cursor } from 'react-simple-typewriter';
import coverImage from '../../assets/logo.jpg';
import '../styling/heroSection.css';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

function Home() {
    const [text] = useTypewriter({
        words: ['Building for Africa', 'Scaling the Engine', 'React & Django Architect'],
        loop: 0,
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 1500,
    });

    useEffect(() => {
        const elements = document.querySelectorAll(".fade-in");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add("visible");
                });
            },
            { threshold: 0.1 }
        );
        elements.forEach(el => observer.observe(el));
        return () => elements.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <>
            <Helmet>
                <title>Paul Innocent | Small Body, Big Engine</title>
                <meta name="description" content="From Roston Street laborer to Full-Stack Engineer. Paul Innocent builds high-performance solutions for the African frontier." />
            </Helmet>

            <section className="hero-section">
                <div className="hero-container">

                    {/* LEFT CONTENT: THE STORY & THE TECH */}
                    <div className="hero-text">
                        <header className="badge-container fade-in delay-1">
                            <span className="founder-badge">EST. ROSTON STREET, LAGOS</span>
                        </header>

                        <h1 className="name fade-in delay-2">
                            SMALL BODY. <br />
                            <span className="highlight-name">BIG ENGINE.</span>
                        </h1>

                        <h2 className="typewriter fade-in delay-3">
                            <span className="highlight">{text}</span>
                            <Cursor cursorStyle="_" />
                        </h2>

                        <p className="mySpeach fade-in delay-4">
                            At 19, I was a laborer casing fences for <strong>₦3,000 a day</strong>.
                            Today, I engineer complex digital infrastructures. I don’t just write code;
                            I build the <strong>integrity</strong> Africa needs to thrive.
                        </p>

                        {/* NEW: THEME-AWARE STATS */}
                        <div className="hero-stats fade-in delay-5">
                            <div className="stat-item">
                                <span className="stat-value">₦3k</span>
                                <span className="stat-label">The Start</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-value">Full-Stack</span>
                                <span className="stat-label">The Tech</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-value">Africa</span>
                                <span className="stat-label">The Vision</span>
                            </div>
                        </div>

                        <div className="hero-buttons fade-in delay-6">
                            <Link to="/contact" className='text-decoration-none'>
                                <button className="first-btn" aria-label="Book a Consultation">Book a Consultation</button>
                            </Link>
                            <Link to="/projects" className='text-decoration-none'>
                                <button className="second-btn" aria-label="View Projects">
                                    View Work <span className='arow'><i className="bi bi-arrow-right"></i></span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT IMAGE: THE FACE OF INNOCODA */}
                    <div className="coverImage-container fade-in delay-6">
                        <div className="image-border-glow">
                            <img
                                className="coverImage"
                                loading="lazy"
                                src={coverImage}
                                alt="Paul Innocent - Full Stack Developer"
                            />
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="scroll-down fade-in delay-7">
                    <span></span>
                </div>
            </section>
        </>
    );
}

export default Home;