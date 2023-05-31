import React from 'react';
import img from '../assets/logo.png'

export default function College({title,line1,line2,line3}) {
    return (
        <div className="college ">
            <h2>{title}</h2>
            <div className="tw-bg-[#e2e2e2] tw-m-auto tw-items-center tw-h-fit tw-w-fit tw-max-w-[50%] tw-flex tw-rounded-lg card tw-px-[2%] tw-py-[3%] hover:tw-shadow-xl" >
                <div className="tw-text-left tw-p-[0%] cbody" >
                    <h2>{line1}</h2>
                    <p>{line2}</p>
                    <p>{line3}</p>
                </div>
            </div>
        </div >
    )
}
