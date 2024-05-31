import React from "react";

// This will house our header and navigation for the site
const Header= ({setCurrentPage})=>{
    return(
        <header>
            <h1>Myron Lucan</h1>
            <nav>
                <ul className="nav-links">
                    <li><button onClick={() => setCurrentPage('About')}>About |</button></li>
                    <li><button onClick={() => setCurrentPage('Portfolio')}>Portfolio |</button></li>
                    <li><button onClick={() => setCurrentPage('Resume')}>Resume |</button></li>
                    <li><button onClick={() => setCurrentPage('Contact')}>Contact</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
