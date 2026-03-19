import React, { useEffect } from "react";
import '../styling/about.css';
import profile2 from "../../assets/logo.jpg"; // Replace with your founderPhoto if you prefer
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

function About() {
    useEffect(() => {
        const elements = document.querySelectorAll(".fade-in");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.2 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);

    return (
        <>
            <section className="about-section">

                <Helmet>

                    <title>About Paul Innocent | Full-Stack Engineer & Founder</title>
                    <meta name="description" content="The journey of Paul Innocent: From a construction laborer on Roston Street to a Full-Stack Developer building the future of African tech." />
                    <meta property="og:title" content="Paul Innocent - Small Body, Big Engine" />
                    <meta property="og:description" content="Discover the story behind InnoCoda and the engineering mission for Africa." />

                    {/* SEO Structured Data for Google Search Results */}
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Paul Innocent",
                            "jobTitle": "Full Stack Developer",
                            "url": "https://innocoda.com",
                            "description": "Full-Stack Engineer specializing in React, Django, and African construction tech.",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Lagos",
                                "addressCountry": "Nigeria"
                            },
                            "sameAs": [
                                "https://github.com/In-ocent",
                                "https://linkedin.com/in/paul-innocent"
                            ]
                        })}
                    </script>
                </Helmet>

                <div className="about-wrapper flex gap-10">

                    {/* Left side - Vertical Profile */}
                    <div className="about-image fade-in delay-1">
                        <img src={profile2} alt="Paul Innocent" />
                        {/* Subtle badge for the "Big Engine" vibe */}
                        <div className="image-overlay-badge">
                            <span>Kogi → Lagos → Africa</span>
                        </div>
                    </div>

                    {/* Right side - The Journey Content */}
                    <div className="about-content">
                        <h1 className="about-title fade-in delay-2">Paul Innocent</h1>
                        <h3 className="about-subtitle fade-in delay-3" style={{ color: 'var(--accent-color)' }}>
                            Full Stack Engineer | Small Body, Big Engine.
                        </h3>

                        <p className="about-text fade-in delay-4">
                            My journey didn't start in a tech hub. It started at age 19, leaving <strong>Kogi State</strong> for the busy streets of <strong>Lagos</strong> with nothing but a secondary school certificate and a responsibility to support my family.
                        </p>

                        <p className="about-text fade-in delay-5">
                            I found my first break as a laborer on a construction site at <strong>Roston Street</strong>. When the engineers looked at my size and doubted me, I told them: <em>"It’s a small body, but a big engine."</em> I proved it by casing the fences of that site, earning <strong>₦3,000 a day</strong>.
                        </p>

                        <p className="about-text fade-in delay-6">
                            Seeing my grit, the CEO, <strong>Mr. Adeyemo</strong>, promoted me to a staff position. I saved every Naira I made to invest in my future, eventually enrolling at <strong>Codar Tech Africa</strong>. Today, I’ve traded the shovel for a keyboard, but that same "Big Engine" now powers complex <strong>Django backends and React frontends</strong>.
                        </p>

                        <p className="about-text fade-in delay-7 fw-bold" style={{ borderLeft: '4px solid #7C53C5', paddingLeft: '15px' }}>
                            I don't just build websites; I build solutions born from the hustle of the Lagos construction industry—designed to bring dignity, transparency, and world-class engineering to the African continent.
                        </p>

                        {/* Skills Snapshot */}
                        <div className="skills-section fade-in delay-8">
                            <h4 className="mb-3">The Stack Behind the Engine</h4>
                            <div className="skills-grid">
                                <span className="skill-badge">⚛️ React & Next.js</span>
                                <span className="skill-badge">🐍 Django (Python)</span>
                                <span className="skill-badge">📜 JavaScript (ES6+)</span>
                                <span className="skill-badge">🗄️ PostgreSQL / SQL</span>
                                <span className="skill-badge">📦 MongoDB</span>
                                <span className="skill-badge">☁️ Cloud Deployment</span>
                                <span className="skill-badge">🎨 UI/UX Design</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="about-tabs fade-in delay-9">
                            <Link to="/contact">
                                <button className="active  shadow-sm transition-all active:scale-95">Hire the Engine</button>
                            </Link>
                            <Link to="/projects">
                                <button className="transition-all active:scale-95">View My Work</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;