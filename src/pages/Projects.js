import React, { useEffect } from 'react'
import img1 from '../assets/mern.png'
import img2 from '../assets/hcj.png'
import sql from '../assets/sql.png'

export default function Projects() {
    useEffect(() => {

        let acc = document.getElementsByClassName("accordion");
        let i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                console.log(i);
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.height == '0px') {
                    panel.style.height = null;
                }
                if (panel.style.height) {
                    panel.style.height = '0px';
                } else {
                    panel.style.height = '-moz-fit-content';
                    panel.style.height = '-webkit-fit-content';
                }
            });
        }
    }, [])
    return (
        <div  className="projects">
            <h1 style={{margin:"4rem"}}>My Projects</h1>
            <div className="projectacc" >
                <div className="punit" >
                    <button class="accordion">Hostel Attendance System</button>
                    <div class="panel">
                        <div className="pimg">
                            <img src={img2} />
                        </div>
                        <p>A web app designed to keep track of students currently residing inside the hostel with controlled access for admins to manage database. This app was made using HTML, CSS, Bootstrap, JavaScript and EJS. Firestore database was used.</p>
                        <p>The app is deployed on heroku: <a href="https://iitisoc-attendance-tool.herokuapp.com/" >here</a></p>
                        <p>The github repo: <a href="https://github.com/vaibhavviking/IITISoC---Attendance-Tool" >here</a></p>
                    </div>
                </div>
                <div className="punit" >
                    <button class="accordion">Education Portal</button>
                    <div class="panel">
                        <div className="pimg">
                            <img src={img2} />
                        </div>
                        <p>A web app designed to facilitate online education for students as well as teachers. Marking Attendance, obtaining study material and many other features are available. This app was made using HTML, CSS, Bootstrap, JavaScript, EJS. MySQL was used as database.</p>
                        <p>The app is deployed on heroku: <a href="https://online-education-portal.herokuapp.com/" >here</a></p>
                        <p>The github repo: <a href="https://github.com/vaibhavviking/Online-Education-Portal" >here</a></p>
                    </div>
                </div>
                <div className="punit" >
                    <button class="accordion">Human Resource Management</button>
                    <div class="panel">
                        <div className="pimg">
                            <img src={img1} />
                        </div>
                        <p>A web app designed to facilitate management of employees in an organisation. Requesting leaves, bonuses, attendance and many other features are available. This app was made using MERN stack completely.</p>
                        <p>The app is deployed on netlify: <a href="https://stackathon.netlify.app/" >here</a></p>
                        <p>The github repo: <a href="https://github.com/vaibhavviking/Stackathon" >here</a></p>
                    </div>
                </div>
                <div className="punit" >
                    <button class="accordion">My Movies</button>
                    <div class="panel">
                        <div className="pimg">
                            <img src={img2} />
                        </div>
                        <p>Since I am a big movie lover, I wondered how about I created a mini imdb-like movie website wherein someone could search, rate, review movies. Created using TMDB movie database, one can do all that here. </p>
                        <p>The github repo: <a href="https://github.com/vaibhavviking/My-movies" >here</a></p>
                    </div>
                </div>
                <div className="punit" >
                    <button class="accordion">Library Management System</button>
                    <div class="panel">
                        <div className="pimg">
                            <img src={sql} />
                        </div>
                        <p>A library is a really complex management scenario wherin consistency of the information is very important. My backend and database skills were tested while making this project. A user could search, hold, loan a book, make friends, creating reading lists and much more.  </p>
                        <p>The github repo: <a href="https://github.com/vaibhavviking/library-app" >here</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
