import React from "react";
import "./contact.css";
import Email from "../../img/email.png";
import LinkedIn from "../../img/linkedin.png";
import Github from "../../img/github.png";
import Resume from "../../img/resume.png";
import { useContext, useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";
import resumeLink from "../../resume/Web-Dev-Resume.pdf";

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_v57i7cc', 'template_x6jy06s', formRef.current, 'user_INPAY120QIU0j2enysOYT')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact Me</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={Email}
                                alt=""
                                className="c-icon"
                            />
                            walidhkhan@gmail.com
                        </div>
                        <div className="c-info-item">
                            <a href="https://www.linkedin.com/in/walidhkhan/">
                                <img
                                    src={LinkedIn}
                                    alt=""
                                    className="c-icon"
                                />
                            </a>
                            Linkedin
                        </div>
                        <div className="c-info-item">
                            <a href="https://github.com/walidhkhan">
                                <img
                                    src={Github}
                                    alt=""
                                    className="c-icon"
                                />
                            </a>
                            Github
                        </div>
                        <div className="c-info-item">
                            <a href={resumeLink} download>
                                <img
                                    src={Resume}
                                    alt=""
                                    className="c-icon"
                                />
                            </a>
                            Resume
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Want to connect?</b> Let's get in touch! I'm always looking for potential opportunities or feedback on my project work 😄
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Your message has been sent. Thank you!"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact