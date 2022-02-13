import React from "react";
import { Document, Page } from 'react-pdf';
import ems from "../images/ems.jpg";
import avocado from "../images/avocado.jpg";
import caprese from "../images/caprese.jpg";
import bread from "../images/bread.jpg";
import brookie from "../images/brookie.jpg";
import cocoa from "../images/cocoa.jpg";
import soup from "../images/soup.jpg";
import caffeinesunsets from "../images/caffeine sunsets.pdf";

function Interests() {
    return (
        <div>
            <title>Interests</title>
            <div className="container-fluid">
                <br /><br /><br />
                <h1 style={{fontSize: '75px', textAlign: 'center', color: 'rgb(233, 198, 0)'}}>Some of my interests!</h1>
                {/* Writing section */}
                <section>
                    <div className="rowInterest">
                        <div className="columnInterest">
                            <div>
                            <h2><strong>Creative Writing</strong></h2>
                            </div>
                            <div className="writing">Writing short stories and poems is one of my favorite pastimes because it offers
                            me a way to unpack my thoughts and let my imagination flow. Here's a little poem
                            I wrote about existential dread a while ago :'-)</div>
                        </div>
                        <div className="column1Interest">
                            <embed src={caffeinesunsets} type="application/pdf" width="100%" height="500px" />
                        </div>
                    </div>  
                </section>
                {/* EMS section */}
                <section>
                    <div className="ems">
                    <div className="rowEMS">
                        <div className="columnEMS">
                        <img src={ems} style={{maxWidth: '100%', height: '400px', borderRadius: '50px'}} />
                        </div>
                        <div className="column1EMS">
                        <div>
                            <h2><strong>Saving Lives...or Tending to Drunk College Students</strong></h2>
                        </div>
                        <div className="writing1">When I completed my EMT training at 16, I thought I'd be out in the field 
                            performing CPR on cardiac arrest patients and bandaging wounds with occlusive
                            dressing. While Hanover definitely doesn't offer that level of excitement–or
                            danger–cleaning up minor bleeds and vomit is compelling in its own way, believe
                            it or not. Working on a team of front-line providers has taught me the teamwork
                            skills necessary to enduring high-stakes situations. </div>
                        </div>
                    </div> 
                    </div> 
                    {/* Making picture of me scalable*/}
                </section>
                {/* Cooking section */}
                <section>
                    <div className="cooking">
                    <h2><strong>When In Doubt, Add Garlic</strong></h2>
                    {/* Making picture of me scalable*/}
                    <div className="imageContainer">
                        <div className="imagerow1">
                        <div className="imagecolumn1">
                            <img src={brookie} style={{width: '100%'}} />
                        </div>
                        <div className="imagecolumn1">
                            <img src={caprese} style={{width: '100%', height: '648px'}} />
                        </div>
                        <div className="imagecolumn1">
                            <img src={cocoa} style={{width: '100%'}} />
                        </div>
                        </div>
                        <div className="imagerow2">
                        <div className="imagecolumn2">
                            <img src={bread} style={{width: '100%'}} />
                        </div>
                        <div className="imagecolumn2">
                            <img src={avocado} style={{width: '100%'}} />
                        </div>
                        <div className="imagecolumn2">
                            <img src={soup} style={{width: '100%'}} />
                        </div>
                        </div>
                    </div>
                    <div className="writing3">Ever since I was a kid, I loved cooking my own food because of the sense of ~independence~
                        it gave me. Experimenting with different recipes was also incredibly fun, if a little messy
                        and disastrous at times. Now, I enjoy making garlic caprese sandwiches, brookies, banana
                        bread, and tomato soup.
                    </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Interests;