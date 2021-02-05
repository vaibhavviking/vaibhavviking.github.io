import React from 'react'

export default function Skillutil({ topic, skill }) {
    return (

        <div className="skillutils" >
            {topic}
            <div className="prog" >
                <div className="exp" style={{ height: '100%', width: skill + '%', backgroundColor: 'black' }} >
                </div>
            </div>
        </div>

    )
}
