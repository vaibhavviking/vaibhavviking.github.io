import React from 'react'

export default function Accordion({ Name, Details }) {

    return (
        <div>
            <button class="accordion">{Name}</button>
            <div class="panel">
                <p>{Details}</p>
            </div>
        </div>
    )
}
