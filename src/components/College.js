import React from 'react';
import img from '../assets/logo.png'

export default function College({title,line1,line2,line3}) {
    return (
        <div className="college">
            <h2>{title}</h2>
            <div className="card" >
                <div className="cbody" >
                    <h2>{line1}</h2>
                    <p>{line2}</p>
                    <p>{line3}</p>
                </div>
            </div>
        </div >
    )
}
