import React from 'react';

export default function Project({title,img,para,repo,hostlink,hostsite}) {
    return (
        <div className="punit tw-mx-0 tw-my-8" >
            <button className="accordion tw-rounded-lg">{title}</button>
            <div className="panel tw-py-0 tw-px-[18px] tw-bg-white tw-h-0 tw-overflow-hidden tw-text-center md:tw-flex md:tw-text-left">
                <div className="pimg tw-max-w-[400px] tw-my-5 tw-mx-auto">
                    <img className="tw-w-[100%]" src={img} />
                </div>
                <div className="tw-p-[2%] md:tw-max-w-[60%] tw-mx-auto">
                <p>{para}</p>
                {hostlink!=""?
                    <p>The app is deployed on {hostsite}: <a className="tw-underline tw-text-blue-400" target='_blank' href={hostlink} >link</a></p>:<p></p>
                }   
                <p>The github repo: <a className="tw-underline tw-text-blue-400" target="_blank" href={repo} >link</a></p>
                </div>
            </div>
        </div>
    )
}
