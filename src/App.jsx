import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import SoftSkills from './components/SoftSkills';
import Languages from './components/Languages';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Hero />
            <About />
            <Education />
            <Experience />
            <Skills />
            <SoftSkills />
            <Languages />
            <Interests />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
