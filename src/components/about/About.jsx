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
                <p className="a-desc">
                I am a new full-stack web developer who has recently completed an online coding bootcamp from the University of Arizona. I have experience using front-end and back-end technologies along with version control. I am both very eager and actively looking to bring these recently aquired skillsets to a professional setting.
                </p>
                <div className="a-cert">
                    <img src={Certificate} alt="" className="a-cert-img" />
                    <div className="a-cert-texts">
                        <h4 className="a-cert-title">Full-Stack Web Development Certified</h4>
                        <p className="a-cert-desc">
                            Certificate of completion from University of Arizona's online coding bootcamp which covered the following topics: Git, HTML, CSS, JavaScript, APIs, Node.js, OOP, Express.js, SQL, ORM, MVC, NoSQL, PWA, React, MERN, and State.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About