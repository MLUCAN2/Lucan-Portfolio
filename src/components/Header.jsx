import React from "react";

// This will house our header and navigation for the site
const Header= ({setCurrentPage})=>{
    return(
        <header>
            <nav>
                <ul className="nav-links">
                    <li><button onClick={() => setCurrentPage('Home')}>Home |</button></li>
                    <li><button onClick={() => setCurrentPage('Portfolio')}>Portfolio |</button></li>
                    <li><button onClick={() => setCurrentPage('Resume')}>Resume |</button></li>
                    <li><button onClick={() => setCurrentPage('Contact')}>Contact</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
