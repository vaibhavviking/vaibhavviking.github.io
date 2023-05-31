import React from 'react'
import College from '../components/College'

export default function About() {
    return (
        <div className="content About">
            <h3>Hello There!</h3>
            <h1>I'm Vaibhav Chandra</h1>
            <h3>Full Stack Developer | Casual Deep Learning Enthusiast</h3>
            <p className="aboutdesc">I always had a love for computers. It is growing even more during my undergrad in CSE. I enjoy making web applications completely from frontend to the backend and the database. MERN stack is my preference but I am always learning something new. With my knowledge I want to contribute to an organisation and grow myself even further.</p>
            <College title = 'Education' line1='Indian Institute of Technology, Indore' line2='BTech, Computer Science and Engineering' line3='2019 - 2023' />
            <College title = 'Work Experience' line1='Software Development Intern' line2='Arcesium Pvt. Ltd., Hyderabad' line3='May 2022 - July 2022' />
            <College title='' line1='College Web Team' line2='Indian Institute of Technology, Indore' line3='Oct. 2020 - Oct. 2021' />

        </div>
    )
}
