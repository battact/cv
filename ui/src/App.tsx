import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CVPage from './components/cv/CVPage';
import ErrorBoundary from './components/errorboundary/ErrorBoundary';

const App: React.FC = () => {
    return (
        <ErrorBoundary>
            <Router>
                <div className="app">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/cv" element={<CVPage />} />
                    </Routes>
                </div>
            </Router>
        </ErrorBoundary>
    );
};

export default App;
