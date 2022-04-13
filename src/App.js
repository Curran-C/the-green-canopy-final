import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Services from './components/Services'
import About from "./components/About"
import Contact from "./components/Contact"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
    return(
        <>
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path='/' element={<About />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact%20us' element={<Contact />} />
                    <Route path='/services' element={<Services />} />
                </Routes>
                <Footer />
            </div>
        </Router>
        </>
    )
}