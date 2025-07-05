import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ErrorBoundary from './components/errorboundary/ErrorBoundary';

const App: React.FC = () => {
    return (
        <ErrorBoundary>
            <div className="app">
                <Header />
                <main className="main-content">
                    <Hero />
                    <About />
                    <Experience />
                    <Skills />
                    <Education />
                    <Contact />
                </main>
                <Footer />
            </div>
        </ErrorBoundary>
    );
};

export default App;
