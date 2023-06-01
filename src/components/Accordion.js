import React from 'react'

export default function Accordion({ Name, Details }) {

    return (
        <div>
            <button className="accordion">{Name}</button>
            <div className="panel">
                <p>{Details}</p>
            </div>
        </div>
    )
}
