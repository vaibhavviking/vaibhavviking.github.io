import React from 'react';
import img from '../assets/logo.png'

export default function College({title,line1,line2,line3}) {
    return (
        <div className="college tw-mt-[4rem]">
            <h2 className="tw-text-[1.5rem] tw-mb-5">{title}</h2>
            <div className="tw-bg-[#e2e2e2] tw-m-auto tw-h-fit  tw-w-[50%] tw-flex tw-rounded-lg card  tw-px-5 tw-py-5 hover:tw-shadow-xl" >
                <div className="tw-text-left tw-p-[0%] cbody" >
                    <h2 className="tw-text-[2rem] tw-mb-3 tw-font-bold">{line1}</h2>
                    <p className="tw-text-xl tw-mb-3">{line2}</p>
                    <p>{line3}</p>
                </div>
            </div>
        </div >
    )
}
