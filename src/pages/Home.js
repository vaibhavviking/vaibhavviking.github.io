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
            </div>
        </div>
    )
}
