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
                {/* <p className="a-desc">
                I am a new full-stack web developer who has recently completed an online coding bootcamp from the University of Arizona. I have experience using front-end and back-end technologies along with version control. I am both very eager and actively looking to bring these recently aquired skillsets to a professional setting.
                </p> */}
                <p className="a-desc">
                I am a Software Developer (Level I) who currently works for a modern trademark and patent software company. I primarily work with the .NET framework / C#, SQL Server, APIs/JSON, Javascript/JQuery, CSS, HTML, and the Kendo UI library. 
                Additionally, I also have experience using Git Bash, Github, Heroku, MongoDB ,Express.js, React.js, Node.js (MERN stack), mySQL, and NoSQL. All of which, were covered in my online coding bootcamp from University of Arizona. 
                </p>
                <br/>
                <p className="a-desc">
                My long term career goals consist of becoming a Senior Software Developer as well as attaining a Masters Degree in Software Development. Through experience and continuous improvement, I will use my knowledge to contribute towards the advanced development of computer software and applications.
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