import React from 'react';
import Collage from '../../img/Collage.png';

const Home= () => (
    <section className='home'>
        <div className='home-content'>
            <div className='photo'>
                <img src={Collage} alt='Collage of my work'/>
            </div>
            <div className='description'>
                <h1>Myron Lucan</h1>
                <p>Welcome to my portfolio. As a veteran and now a fresh developer, you will find that I have a lot to offer your site or your business. With experience in many different industries, I can certainly say that I have worn many hats. Whether it be fixing planes in Japan, helping insurance customers get the most out of their claim as an adjuster, or traveling the DFW metroplex to implement building automation solutions, I have always given 100% and excelled in what I do. Don't just take my word for it though. Explore for yourself and feel free to reach out to me via the contact page for any inquiries or just to say "hi".</p>
            </div>
        </div>    
    </section>
)

export default Home;

