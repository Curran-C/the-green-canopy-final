import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Services from './components/Services'

export default function App() {
    return(
        <div>
            <Navbar />
            <div className="overall-margin">
                <Services />
            </div>
            <Footer />
        </div>
    )
}