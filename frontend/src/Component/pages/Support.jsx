import React, { useState, useEffect } from 'react';
import '../styling/support.css';
import founderPhoto from '../../assets/founder.paull.jpg';
import axios from 'axios';

const coffeeOptions = [
    { id: 1, name: 'Small Fuel', price: 3000, cups: 1 },
    { id: 2, name: 'Regular Fuel', price: 5000, cups: 1 },
    { id: 3, name: 'Double Fuel', price: 10000, cups: 2 },
    { id: 4, name: 'Project Boost', price: 25000, cups: 3 },
    { id: 5, name: 'Visionary', price: 50000, icon: "⭐" },
    { id: 6, name: 'Custom', price: null, icon: "✍️" },
];

function Support() {
    const [showScroll, setShowScroll] = useState(false);
    const [selected, setSelected] = useState(coffeeOptions[1]);
    const [customAmount, setCustomAmount] = useState("");
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);

    const accountDetails = {
        number: "9158841154",
        bank: "OPay",
        name: "Innocent Paul Ojochenemi"
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(accountDetails.number);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    useEffect(() => {
        const checkScrollTop = () => {
            setShowScroll(window.scrollY > 300);
        };
        window.addEventListener("scroll", checkScrollTop);
        return () => window.removeEventListener("scroll", checkScrollTop);
    }, []);

    const handleChanges = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmitSupport = async (e) => {
        e.preventDefault();
        const finalAmount = selected.price ? selected.price : customAmount;

        if (!finalAmount) {
            alert("Please select a tier or enter a custom amount first!");
            return;
        }

        setLoading(true);

        const payload = {
            name: form.name || "Anonymous",
            // We ensure email is either a valid string or null to satisfy Django validation
            email: form.email.trim() === "" ? null : form.email,
            tier_name: selected.name,
            amount: String(finalAmount),
            message: form.message
        };

        try {
            // Local test endpoint
            const response = await axios.post("https://innocent-portfolio-backend.onrender.com/api/support/", payload);
            // const response = await axios.post("https://innocent-portfolio-backend.onrender.com/api/support/", payload);

            if (response.status === 201 || response.status === 200) {
                alert("✅ Support Logged! You can now proceed with the transfer. Thank you!");
                setForm({ name: "", email: "", message: "" });
                setCustomAmount("");
            }
        } catch (error) {
            console.error("Support API Error:", error);
            alert("❌ Connection Error. Please ensure your Django server is running.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="mother">
            {/* PAN-AFRICAN HEADER */}

            <div className="container-content">
                <div className="heart-image shadow-lg" style={{ background: 'linear-gradient(135deg, #E64A8D, #7C53C5)' }}>
                    <i className="bi bi-globe-africa"></i>
                </div>
                <h1 className="support-me uppercase italic font-black tracking-tighter mt-3">Support The Vision</h1>
                <p className="text-content opacity-75 fw-medium px-md-5">
                    I am building the **digital backbone** for the African Construction Industry.
                    Beyond just code, I am creating the transparency, safety, and efficiency
                    required to scale our cities. Your support isn't just a donation—it's
                    **direct fuel** for the research, compute, and integrity needed to
                    revolutionize how Africa builds.**.
                </p>
            </div>

            <div className="container-box">
                {/* LEFT: PAYMENT FLOW */}
                <div className="box-1 shadow-lg border-0">
                    <h2 className='box-header mb-4'>
                        <span className='cofee-1'><i className="bi bi-cup-hot"></i></span> Fuel the Grind
                    </h2>

                    <div onClick={handleCopy} className="mb-4 p-4 rounded-4 border border-dashed transition-all"
                        style={{ background: 'rgba(124, 83, 197, 0.05)', borderColor: '#7C53C5', cursor: 'pointer' }}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <p className="text-uppercase mb-1 fw-bold" style={{ fontSize: '0.65rem', color: '#7C53C5' }}>
                                    {copied ? '✅ Copied' : 'Click to Copy Account'}
                                </p>
                                <h4 className="fw-black mb-0 tracking-tighter" style={{ color: 'var(--text-color)' }}>{accountDetails.number}</h4>
                                <p className="small mb-0 opacity-75 fw-bold">{accountDetails.bank} • {accountDetails.name}</p>
                            </div>
                            <i className={`bi ${copied ? 'bi-check-all text-success' : 'bi-clipboard'} fs-3 opacity-50`}></i>
                        </div>
                    </div>

                    <div className="coffee-options mb-4">
                        {coffeeOptions.map((opt) => (
                            <div key={opt.id} className={`coffee-option border-0 shadow-sm ${selected.id === opt.id ? "actively" : ""}`} onClick={() => setSelected(opt)}>
                                <h3 className="mb-2">{opt.cups ? "☕".repeat(opt.cups) : opt.icon}</h3>
                                <h2 className="fw-bold h5 mb-1">{opt.price ? `₦${opt.price.toLocaleString()}` : "Custom"}</h2>
                                <small className="opacity-50 text-uppercase fw-bold" style={{ fontSize: '10px' }}>{opt.name}</small>
                                {opt.name === "Custom" && selected.id === opt.id && (
                                    <input type="number" min={0} className="form-control form-control-sm mt-2 text-center shadow-none" placeholder="Amount" value={customAmount} onChange={(e) => setCustomAmount(e.target.value)} />
                                )}
                            </div>
                        ))}
                    </div>

                    <form className="coffee-form border-0 shadow-none p-0 mb-4" style={{ background: 'transparent' }}>
                        <input className='input-name w-100 mb-3' type="text" name="name" value={form.name} onChange={handleChanges} placeholder="Your Name (Optional)"
                            style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(124, 83, 197, 0.3)', color: 'var(--text-color)', padding: '10px 0', outline: 'none' }} />

                        <input className='input-name w-100 mb-3' type="email" name="email" value={form.email} onChange={handleChanges} placeholder="Your Email (Optional)"
                            style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(124, 83, 197, 0.3)', color: 'var(--text-color)', padding: '10px 0', outline: 'none' }} />

                        <textarea className='meaage-textarea w-100' name="message" value={form.message} onChange={handleChanges} placeholder="Leave a message for the founder..."
                            style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(124, 83, 197, 0.3)', color: 'var(--text-color)', padding: '10px 0', outline: 'none', minHeight: '60px' }} />
                    </form>

                    <button disabled={loading} onClick={handleSubmitSupport} className="coffee-btn w-100 py-3 rounded-4 fw-black text-uppercase border-0 shadow transition-all active:scale-95">
                        {loading ? (
                            <span><i className="bi bi-hourglass-split me-2"></i>Logging Support...</span>
                        ) : (
                            `Support with ${selected.price ? `₦${selected.price.toLocaleString()}` : customAmount ? `₦${customAmount}` : "Custom Amount"}`
                        )}
                    </button>
                </div>

                {/* RIGHT: IMPACT & PROFILE */}
                <div className="box-2-container">
                    <div className="card border-0 shadow-lg rounded-4 mb-4" style={{ background: 'var(--card-bg-color)', color: 'var(--text-color)' }}>
                        <div className="card-body p-4">
                            <h2 className="fw-black mb-4 h5 text-uppercase italic tracking-tight" style={{ background: 'linear-gradient(to right, #E64A8D, #7C53C5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                The Heart of the Mission
                            </h2>

                            <div className="d-flex align-items-start mb-4">
                                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #E64A8D, #FF6FA5)', color: 'white' }}><i className="bi bi-sun-fill"></i></div>
                                <div className="ms-3">
                                    <h6 className="fw-bold mb-0">Keeping the Dream Alight</h6>
                                    <p className="small opacity-75 mb-0 font-italic text-justify">
                                        Your support powers the solar energy that keeps me coding through the darkest Lagos nights. It ensures the server never sleeps and the grind never stops, regardless of the grid.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start mb-4">
                                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #7C53C5, #A88BEB)', color: 'white' }}><i className="bi bi-person-badge-fill"></i></div>
                                <div className="ms-3">
                                    <h6 className="fw-bold mb-0">Dignity for African Workers</h6>
                                    <p className="small opacity-75 mb-0 font-italic text-justify">
                                        We are building more than a site; we are building a legacy. By scaling CodaSite, we give every honest laborer a verified digital identity—turning invisible work into a measurable career.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start mb-4">
                                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #FFB800, #FF8A00)', color: 'white' }}><i className="bi bi-shield-check"></i></div>
                                <div className="ms-3">
                                    <h6 className="fw-bold mb-0">Structural Integrity for a Continent</h6>
                                    <p className="small opacity-75 mb-0 font-italic text-justify">
                                        Corruption and poor data cost lives. Your contribution helps us build the digital infrastructure needed to track site safety and materials, ensuring Africa’s future is built to last on transparency.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* THEME-AWARE FOUNDER PROFILE */}


                    <div className="box-4 shadow-lg border-0 rounded-4 text-center p-4"
                        style={{
                            background: 'var(--card-bg-color)',
                            color: 'var(--text-color)',
                            border: '1px solid rgba(124, 83, 197, 0.2)',
                            transition: 'transform 0.3s ease'
                        }}>

                        <div className="position-relative d-inline-block mb-3">
                            <img
                                src={founderPhoto}
                                className='profile-image border border-3 shadow-sm'
                                alt="Paul Innocent"
                                style={{
                                    borderColor: '#7C53C5',
                                    width: '115px',
                                    height: '115px',
                                    objectFit: 'cover',
                                    borderRadius: '50%',
                                    boxShadow: '0 0 25px rgba(124, 83, 197, 0.2)'
                                }}
                            />
                            <div className="position-absolute bottom-0 end-0 bg-success border border-2 rounded-circle"
                                style={{ width: '18px', height: '18px', borderColor: 'var(--card-bg-color)' }}></div>
                        </div>

                        <div className="mb-3">
                            <h3 className='myName h5 fw-black text-uppercase tracking-widest mb-1'>Paul Innocent</h3>
                            <span className="badge rounded-pill text-uppercase px-3 py-2"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(124, 83, 197, 0.15), rgba(230, 74, 141, 0.15))',
                                    color: '#7C53C5',
                                    fontSize: '0.7rem',
                                    fontWeight: '800'
                                }}>
                                Lead Engineer & Visionary
                            </span>
                        </div>

                        <div className="founder-manifesto px-2">
                            <p className="small mb-3 opacity-75 italic" style={{ lineHeight: '1.7', textAlign: 'center' }}>
                                "At 19, I left **Kogi** for **Lagos** to find a way for my family. I started as a laborer on Roston Street,
                                carrying blocks for ₦3k a day. They said I was 'too small' for the work, but I told them:
                                <strong> 'Small body, big engine.'</strong>"
                            </p>

                            <p className="small mb-4 opacity-75" style={{ lineHeight: '1.7', textAlign: 'center' }}>
                                Today, that same engine is building the digital future of African construction. I’ve moved from
                                casing fences to coding systems that ensure every worker’s sweat is valued and every structure
                                is built to last. Built by us, for us.
                            </p>
                        </div>

                        <div className="d-flex justify-content-center align-items-center gap-4 py-3 border-top"
                            style={{ borderColor: 'rgba(124, 83, 197, 0.1)' }}>
                            <div className="text-center">
                                <h6 className="mb-0 fw-bold" style={{ color: '#7C53C5' }}>Kogi</h6>
                                <small className="opacity-50 text-uppercase" style={{ fontSize: '0.6rem' }}>Roots</small>
                            </div>
                            <div className="vr opacity-25"></div>
                            <div className="text-center">
                                <h6 className="mb-0 fw-bold" style={{ color: '#E64A8D' }}>₦3,000</h6>
                                <small className="opacity-50 text-uppercase" style={{ fontSize: '0.6rem' }}>Start</small>
                            </div>
                            <div className="vr opacity-25"></div>
                            <div className="text-center">
                                <h6 className="mb-0 fw-bold" style={{ color: '#FFB800' }}>Africa</h6>
                                <small className="opacity-50 text-uppercase" style={{ fontSize: '0.6rem' }}>Mission</small>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {showScroll && (
                <button className="scroll-to-top-btn border-0 shadow-lg d-flex align-items-center justify-content-center"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <i className="bi bi-arrow-up"></i>
                </button>
            )}
        </section>
    );
}

export default Support;