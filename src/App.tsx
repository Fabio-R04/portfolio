import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

interface SectionRefs {
    [key: string]: React.RefObject<HTMLDivElement>
}

function App() {
    const [activeSection, setActiveSection] = useState<string>("");

    const sectionRefs: SectionRefs = {
        home: useRef<HTMLDivElement>(null),
        skills: useRef<HTMLDivElement>(null),
        about: useRef<HTMLDivElement>(null),
        portfolio: useRef<HTMLDivElement>(null),
        contact: useRef<HTMLDivElement>(null)
    }

    useEffect(() => {
        const handleScroll = () => {
            for (const sectionId in sectionRefs) {
                const sectionTop = sectionRefs[sectionId].current?.offsetTop ?? 0;
                const sectionBottom = sectionTop + (sectionRefs[sectionId].current?.clientHeight ?? 0);
                const windowBottom = window.pageYOffset + window.innerHeight;

                if (windowBottom > sectionTop && window.pageYOffset < sectionBottom) {
                    setActiveSection(sectionId)
                }
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <BrowserRouter>
            <Navbar
                activeSection={activeSection}
            />
            <div className="container">
                <div className="container__sections">
                    <Home
                        homeRef={sectionRefs.home}
                    />
                    <About
                        aboutRef={sectionRefs.about}
                    />
                    <Portfolio
                        portfolioRef={sectionRefs.portfolio}
                    />
                    <Contact
                        contactRef={sectionRefs.contact}
                    />
                </div>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
