import "./about.css";
import Certificate from "../../img/cert.PNG";
import AboutMePic from "../../img/about-me-pic.jpg";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={AboutMePic}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About</h1>
                <p className="a-sub">
                    Who is this guy?
                </p>
                <br/>                
                <p className="a-desc">
                I'm an IT Professional who is currently seeking opportunities. I have prior professional experience working within full-stack devlopment, specifically using the following technologies: ASP.NET, C#, SQL Server, MVC, Entity Model, LINQ, APIs, JSON, Javascript, JQuery, NodeJs, CSS, HTML, Telerik / Kendo UI library, and the Quill template library. 
                Additionally, I also have personal knowledge on using Git Bash, Github, Heroku, MongoDB ,Express.js, React.js, Node.js (MERN stack), mySQL, and NoSQL. All of which, were covered during my Full-Stack Web Devlepment Certification program at University of Arizona. 
                </p>
                <br/>
                <p className="a-desc">
                Rounding out my professional skill-set is my background in business, especially regarding finance, accounting and management. This was established during my time as an accountant in commerical property management, and has developed my foundation to analyze data, problem-solve, document, and communicate crucial information in a timely manner.
                </p>
                <br/>
                <p className="a-desc">
                My long term career goals consist of growing into a senior IT role. Through further experience and continuous improvement, I will use my knowledge within the fundamentals of IT and business to contribute towards advanced development within the technological world.
                </p>
                <div className="a-cert">
                    <img src={Certificate} alt="" className="a-cert-img" />
                    <div className="a-cert-texts">
                        <h4 className="a-cert-title">Full-Stack Web Development Certified</h4>
                        <p className="a-cert-desc">
                            Certificate of completion from University of Arizona's online coding bootcamp. This program was part-time and had a duration of 6 months, with a 50% graduation rate in my cohort.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About