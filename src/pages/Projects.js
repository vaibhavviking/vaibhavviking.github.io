import React, { useEffect } from 'react'
import img1 from '../assets/mern.png'
import img2 from '../assets/hcj.png'
import sql from '../assets/sql.png'
import Project from '../components/Project'

export default function Projects() {
    useEffect(() => {

        let acc = document.getElementsByClassName("accordion");
        let i,j;
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
                    for(j=0;j<acc.length;j++){
                        acc[j].classList.remove('active');
                        let temppanel = acc[j].nextElementSibling;
                        temppanel.style.height='0px';
                        console.log('hide all done')
                    }
                    panel.style.height = '-moz-fit-content';
                    panel.style.height = '-webkit-fit-content';
                }
            });
        }
    }, [])
    return (
        <div  className="tw-pt-12 projects">
            <h1 className="tw-text-[2rem] tw-my-[3rem]">My Projects</h1>
            <div className="projectacc tw-w-[80%] tw-m-auto tw-text-left" >
                <Project title="Hostel Attendance System" img={img2} para="A web app designed to keep track of students currently residing inside the hostel with controlled access for admins to manage database. This app was made using HTML, CSS, Bootstrap, JavaScript and EJS. Firestore database was used." repo="https://github.com/vaibhavviking/IITISoC---Attendance-Tool" hostlink="" hostsite="" />
                <Project title="Online Education Portal" img={img2} para="A web app designed to facilitate online education for students as well as teachers. Marking Attendance, obtaining study material and many other features are available. This app was made using HTML, CSS, Bootstrap, JavaScript, EJS. MySQL was used as database." repo="https://github.com/vaibhavviking/Online-Education-Portal" hostlink="" hostsite="" />
                <Project title="Human Resource Management" img={img1}para="A web app designed to facilitate management of employees in an organisation. Requesting leaves, bonuses, attendance and many other features are available. This app was made using MERN stack completely." repo="https://github.com/vaibhavviking/Stackathon" hostlink="https://stackathon.netlify.app/" hostsite="netlify" />
                <Project title="My Movies" img={img2} para="Since I am a big movie lover, I wondered how about I created a mini imdb-like movie website wherein someone could search, rate, review movies. Created using TMDB movie database, one can do all that here." repo="https://github.com/vaibhavviking/My-movies" hostlink="" hostsite="" />
                <Project title="Library Management System" img={sql} para="A library is a really complex management scenario wherin consistency of the information is very important. My backend and database skills were tested while making this project. A user could search, hold, loan a book, make friends, creating reading lists and much more." repo="https://github.com/vaibhavviking/library-app" hostlink="" hostsite="" />
            </div>
        </div>
    )
}
