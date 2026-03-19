import React, { useEffect } from 'react';
import '../styling/services.css';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'; // Added this import

const services = [
    {
        id: 1,
        icon: "bi-code-slash",
        title: "Full-Stack Web Development",
        description: "Building responsive, high-performance web applications using React and Django that scale with your business.",
        tools: "React, Next.js, Django"
    },
    {
        id: 2,
        icon: "bi-database-fill-gear",
        title: "Robust Backend & APIs",
        description: "Engineering secure, powerful backends. I focus on database integrity and API performance—the engine of your app.",
        tools: "PostgreSQL, Python, REST APIs"
    },
    {
        id: 3,
        icon: "bi-phone-vibrate",
        title: "Mobile App Development",
        description: "Developing cross-platform mobile experiences with React Native that feel native and perform flawlessly.",
        tools: "React Native, Expo"
    },
    {
        id: 4,
        icon: "bi-building-gear",
        title: "Custom Enterprise Solutions",
        description: "Specialized digital tools for the construction and labor industry to track productivity and ensure structural safety.",
        tools: "Inventory Systems, CRM"
    }
];

function Services() {
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
                <title>Services | Paul Innocent - Full Stack Solutions</title>
                <meta name="description" content="Professional web and mobile development services. Specializing in Django backends and React frontends for high-impact digital products." />
            </Helmet>

            <section className="services-section">
                <div className="container"> {/* Start Container */}

                    {/* Header Section */}
                    <div className="text-center mb-5">
                        <span className="badge rounded-pill px-3 py-2 mb-2" style={{ background: 'rgba(124, 83, 197, 0.1)', color: '#7C53C5' }}>WHAT I OFFER</span>
                        <h2 className="display-5 fw-bold fade-in" style={{ color: 'var(--text-color)' }}>Solutions Built to Last</h2>
                        <p className="fade-in delay-1" style={{ color: 'var(--mySpech-text-color)' }}>Turning your business challenges into scalable digital reality.</p>
                    </div>

                    {/* Services Grid */}
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={service.id} className={`service-card fade-in delay-${index + 1}`}>
                                <div className="icon-box">
                                    <i className={`bi ${service.icon}`}></i>
                                </div>
                                <h4 className="fw-bold" style={{ color: 'var(--text-color)' }}>{service.title}</h4>
                                <p style={{ color: 'var(--mySpech-text-color)', opacity: '0.8' }}>{service.description}</p>
                                <div className="tool-tags">
                                    <small className="fw-bold">{service.tools}</small>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pricing Section - Now inside the container for perfect alignment */}
                    <div className="pricing-intro text-center mt-5 pt-5 fade-in delay-5">
                        <h3 className="fw-bold" style={{ color: 'var(--text-color)' }}>Ready to Ignite?</h3>
                        <p style={{ color: 'var(--mySpech-text-color)' }}>Every project is unique. I offer flexible engagement models tailored to your mission.</p>
                    </div>

                    <div className="pricing-grid mt-4">
                        <div className="price-card fade-in delay-6">
                            <h5 style={{ color: 'var(--text-color)' }}>MVP / Startup Launch</h5>
                            <p className="small" style={{ color: 'var(--mySpech-text-color)' }}>Perfect for turning a fresh idea into a working "Big Engine" prototype.</p>
                            <hr style={{ borderColor: 'var(--bg-boder-color)' }} />
                            <ul className="list-unstyled small text-start d-inline-block" style={{ color: 'var(--mySpech-text-color)' }}>
                                <li className="mb-2"><i className="bi bi-check2-circle me-2 text-primary"></i>Core Feature Set</li>
                                <li className="mb-2"><i className="bi bi-check2-circle me-2 text-primary"></i>React & Django Stack</li>
                                <li className="mb-2"><i className="bi bi-check2-circle me-2 text-primary"></i>30 Days Support</li>
                            </ul>
                            <Link to="/contact"><button className="btn-outline w-100 mt-3">Inquire for Pricing</button></Link>
                        </div>

                        <div className="price-card featured fade-in delay-7">
                            <div className="popular-badge">MOST POWERFUL</div>
                            <h5 className="text-white">Custom Enterprise Build</h5>
                            <p className="small text-white-50">Full-scale digital infrastructure for construction or complex business operations.</p>
                            <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                            <ul className="list-unstyled small text-start d-inline-block text-white">
                                <li className="mb-2"><i className="bi bi-check2-circle me-2"></i>Advanced Security</li>
                                <li className="mb-2"><i className="bi bi-check2-circle me-2"></i>Scalable Database Design</li>
                                <li className="mb-2"><i className="bi bi-check2-circle me-2"></i>Priority Maintenance</li>
                            </ul>
                            <Link to="/contact"><button className="btn-solid w-100 mt-3">Start Consultation</button></Link>
                        </div>
                    </div>

                </div> {/* End Container */}
            </section>
        </>
    );
}

export default Services;