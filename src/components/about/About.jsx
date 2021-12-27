import "./about.css"
import Certificate from "../../img/cert.PNG"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    It is a long established fact that a reader will be distracted by the
                    readable content.
                </p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
                </p>
                <div className="a-cert">
                    <img src={Certificate} alt="" className="a-cert-img" />
                    <div className="a-cert-texts">
                        <h4 className="a-cert-title">Full-Stack Web Developement</h4>
                        <p className="a-cert-desc">
                            Certificate of completion for University of Arizona's online coding bootcamp which covered the following topics: HTML, CSS, JavaScript, Jquery, etc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About