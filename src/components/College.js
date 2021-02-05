import React from 'react';
import img from '../assets/logo.png'

export default function College() {
    return (
        <div className="college">
            <div className="card" >
                <div className="cimg">
                    <img src={img} />
                </div>
                <div className="cbody" >
                    <p>
                        Indian Institute of Technology, Indore<br></br>
                        BTech in Computer Science and Engineering
                    </p>
                </div>
            </div>
        </div >
    )
}
