import { Routes, Route } from "react-router-dom";
import NaveBer from "./Component/NaveBer.jsx";
import Home from "./Component/pages/Home.jsx";
import About from "./Component/pages/About.jsx";
import Projects from "./Component/pages/Projects.jsx";
import Templates from "./Component/pages/Templates.jsx";
import Contact from "./Component/pages/Contact.jsx";
import Support from "./Component/pages/Support.jsx";
import Services from "./Component/pages/Services.jsx";
import NotFound from "./Component/pages/NotFound.jsx";

function App() {
    return (
        <>
            <NaveBer />
            <main className="main-contaner" >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/Services" element={<Services />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/templates" element={<Templates />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </>
    );
}

export default App;