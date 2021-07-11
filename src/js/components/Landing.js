import React from 'react';
import video from "../../img/math.webm";

const Landing = () => (
    <main>
       <video autoPlay loop muted width="100%" className="video">
            <source type="video/webm" src={video}/>
        </video>
        <div className="overlay">
            <p className="name">Trent Fridey</p>
            <div id="landing-links">
                <a href="https://github.com/trentfridey">Github</a>{' - '}
                <a href="https://www.linkedin.com/in/trentfridey/">LinkedIn</a>{' - '}
                <a href="https://blog.trentfridey.com">Blog</a>
            </div>
        </div>
    </main>
);

export default Landing;
