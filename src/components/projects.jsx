import React from "react";
import scholarship from "../images/scholarship_faq-1.jpeg";
import esp32 from "../images/esp32.png";
import nlp from "../images/nlp.jpg";

function Projects() {
    return (
        <div>
            {/*for projects*/}
            <title>Projects</title>
            <div className="container-fluid">
                <br /><br /><br />
                <h1 style={{fontSize: '75px', textAlign: 'center', color: 'rgb(255, 153, 255)'}}>Some of my work!</h1>
                {/* Writing section */}
                <section>
                    <div className="rowInterest" style={{marginTop: '30px'}}>
                        <div className="columnProject">
                            <div>
                                <h2><strong>Scholarship Database</strong></h2>
                            </div>
                            <div className="writing">To expedite the task of processing scholarship applications and granting
                            recipients their rewards, I helped develop a scholarship application that inputs into a SQL database.
                            This database contains several details about the applicant including their pertinent identifying
                            information, academic performance, and financial background. Automated emails can be sent to the
                            program director via a simple Python program, alerting them of new applications that were received within a certain duration
                            of time. By automating the process of reviewing scholarship submissions, granting scholarships becomes
                            more efficient and easy, benefiting both the recipient and benefactor.</div>
                        </div>
                        <div className="column1Project">
                            <img src={scholarship} style={{maxWidth: '100%', height: '400px', borderRadius: '50px'}} />
                        </div>
                    </div>
                </section>
                {/* EMS section */}
                <section>
                    <div className="ems">
                        <div className="rowEMS">
                            <div className="columnHomeAuto">
                                <img src={esp32} style={{maxWidth: '100%', height: '400px', borderRadius: '50px'}} />
                            </div>
                            <div className="column1HomeAuto">
                                <div>
                                    <h2><strong>Home Automation System</strong></h2>
                                </div>
                                <div className="writing">With the help of some friends, I set up a home automation security
                                 system that alerts the homeowner whenever any outside door in the household is opened. This 
                                 project integrated hardware and software through ESP32 chips that connect to the Message 
                                 Queuing Telemetry Transport (MQTT) server to send messages to which the listener reacts to 
                                 by logging into the security log table in a MYSQL database containing tables with all the 
                                 doors in the house along with their open/closed status. I wrote a Phythonprogram that sends a query 
                                 to this database looking for all the doors that were opened in the last minute (this time 
                                 interval can be altered to other durations) and sends an email alert to the homeowner letting 
                                 them know which doors were opened. This was an enjoyable learning experience for me and my friends. </div>
                            </div>
                        </div> 
                    </div>
                </section>
                {/* Writing section */}
                <section>
                    <div className="rowInterest" style={{marginTop: '30px'}}>
                        <div className="columnProject">
                            <div>
                                <h2><strong>NLP</strong></h2>
                            </div>
                            <div className="writing">This is a program I made for fun when learning Python that, when given a PDF file, 
                            converts it to an MP3 audio file through utilizing the Google text to speech API and a PDF reader. For each 
                            page in the PDF, the program extracts the text from those pages and adds it to an array of text. The text is 
                            then concatenated with spaces and passed into the gTTs function to create an audio file that narrates the text 
                            in the PDF. The speed can be altered by changing the speed settings of the MP3 file.</div>
                        </div>
                        <div className="column1Project">
                            <img src={nlp} style={{maxWidth: '100%', height: '400px', borderRadius: '50px'}} />
                        </div>
                    </div>  
                </section>
            </div> 
        </div>
    );
}

export default Projects;