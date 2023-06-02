import React from 'react'
import img from '../assets/pic.jpg'
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social';
import { Alert } from 'react-bootstrap';

export default function Home() {

    function handlesend(){
        console.log('jai ho');
        Array.from(document.getElementsByTagName('input')).forEach(e => {
            e.value="";
        })
        Array.from(document.getElementsByTagName('textarea')).forEach(e => {
            e.value="";
        })
        return <Alert variant="success">Message sent!</Alert>
    }

    return (
        <div className="tw-text-center tw-mt-[5%] tw-pt-12 Home tw-pb-[5%]">
            <div className='pfp tw-max-w-fit tw-m-auto tw-mb-2' >
                <img className="tw-w-[20rem] tw-mb-2" src={img} />
                <h1 className="tw-w-fit tw-m-auto tw-font-bold text-2xl">Vaibhav Chandra</h1>
            </div>
            <div>
                <div className="desc tw-w-[58%] tw-m-auto">
                    <ReactTypingEffect className="tw-font-bold typingeffect" text={['I am Vaibhav Chandra. I am a full stack web development enthusiast.']} speed={50} eraseDelay={500} />
                    <p>Hello. Welcome to my portfolio page, made with love and hardwork. This will give you an insight into me and my technical expertise. ReactJS has been used to make this page.</p>
                    <Social />
                </div>
                <div className="container">
                    <div className="row md:tw-divide-x-[1px] tw-divide-black">
                        <div id="resumebox" className="tw-h-[20rem] tw-mt-[4rem] col-12 col-md-4 tw-flex tw-justify-center tw-items-center"><button type="button" className="tw-bg-green-600 tw-p-4 tw-rounded-3xl tw-text-white hover:tw-bg-green-700 hover:tw-scale-110 "><a className="hover:tw-text-white" download href={process.env.PUBLIC_URL + '/docs/Resume_SDE.pdf'}>Resume</a></button></div>
                        <div id="sendmailbox" className="tw-h-[20rem] tw-mt-[4rem] col-12 col-md-4 tw-mb-8">
                            <input className="tw-max-w-[80%] tw-m-[2%] tw-rounded-md tw-p-1" placeholder='Name' />
                            <input className="tw-max-w-[80%] tw-m-[2%] tw-rounded-md tw-p-1" placeholder='Email' />
                            <textarea className="tw-max-w-[80%] tw-m-[2%] tw-rounded-md tw-p-1" rows="4" cols="25" placeholder='Something nice I hope :P' />
                            <div>
                                <button className="tw-bg-green-600 tw-p-4 tw-rounded-3xl tw-text-white hover:tw-bg-green-700 hover:tw-scale-110" onClick={handlesend}>Send!</button>
                            </div>
                        </div>
                        <div id="contactbox" className="tw-h-[20rem] tw-mt-[4rem] col-12 col-md-4">
                            <h3 className="tw-text-2xl tw-font-bold tw-mb-3">Contact Info:</h3>
                            <p>Mobile: +91-7470377825</p>
                            <p>Alternate Mobile: +91-7974923934</p>
                            <p>Email: chandravaibhav65@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
