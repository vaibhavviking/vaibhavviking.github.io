import React from 'react'
import img from '../assets/pic.jpg'
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social';

export default function Home() {
    return (
        <div className="Home">
            <div className='pfp' >
                <img src={img} />
                <h1>Vaibhav Chandra</h1>
            </div>
            <div>
                <div className="desc">
                    <ReactTypingEffect className="typingeffect" text={['I am Vaibhav Chandra. I am a full stack web development enthusiast.']} speed={50} eraseDelay={500} />
                    <p>Hello. Welcome to my portfolio page, made with love and hardwork. This will give you an insight into me and my technical expertise. ReactJS has been used to make this page.</p>
                    <Social />
                </div>
                <div class="container">
                    <div class="row extrainfo">
                        <div id="resumebox" class="extrainfobox col-12 col-md-4" style={{ borderRight: "1px solid black" }}><button type="button" class="btn btn-success">Resume</button></div>
                        <div id="sendmailbox" class="extrainfobox col-12 col-md-4" style={{ borderRight: "1px solid black" }}>
                            <input placeholder='Name'/>
                            <input placeholder='Email'/>
                            <textarea rows="4" cols="25" placeholder='Something nice I hope :P'/>
                        </div>
                        <div id="contactbox" class="extrainfobox col-12 col-md-4">
                            <h3>Contact Info:</h3>
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
