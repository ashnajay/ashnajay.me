import React from 'react';
import me from '../images/me.jpg';

function Home() {
    return (
        <div>
            {/* ashnajay.me homepage */}
            <title>Home</title>
            <div className="container-fluid">
                <div className="welcome">
                    <br /><br />
                    <h1 style={{fontSize: '100px', textAlign: 'center', marginTop: '40px'}}>Welcome!</h1>
                </div>
                {/* About section */}
                <section className="about-me">
                    <h2 style={{fontSize: '50px', textAlign: 'center'}}> <strong>About Me</strong></h2>
                    <div className="row">
                        <div className="column">
                            <img className="image" src={me} style={{maxWidth: '100%', height: '400px'}} />
                        </div>
                        <div className="column1">
                            <div className="intro">Hi, I'm Ashna and I'm a sophomore computer science major from New Jersey. Around campus, you can
                            find me hunched over my laptop at Collis, hanging out with my friends in Novak, or on an EMS call
                            at an ungodly hour of the morning.</div>
                        </div>
                    </div>
                    {/* Skills section */}
                    <div className="skills">
                        <div className="skillsList">
                            <p><strong> * Computer Science Coursework:</strong> Survey of Computer Science, Intro to Programming,
                            AP Computer Science, Problem Solving via Object Oriented Programming, Software Design and Implementation</p>
                        </div>
                        <div className="skillsList">
                            <p><strong> * Software Skills:</strong> Java, Python, C, JavaScript, SQL, Bash, Pandas</p>
                        </div>
                        <div className="skillsList">
                            <p><strong> * What I'm Learning:</strong> AR/VR Development/C# (Unity), React, HTML/CSS</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;