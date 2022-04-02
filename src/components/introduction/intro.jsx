import "./intro.css";
import Me from "../../img/me.jpg";

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="i-name">Walid Khan</h1>
                    <h2 className="i-intro">and I'm a...</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">UI / UX Enhancer</div>
                            <div className="i-title-item">MVC Collaborator</div>
                            <div className="i-title-item">Database Director</div>
                            <div className="i-title-item">Documentation Analyzer</div>
                            <div className="i-title-item">Software Developer</div>
                        </div>
                    </div>
                    {/* <p className="i-desc">
                        I am a new full-stack web developer who has recently completed an online coding bootcamp from the University of Arizona. I have experience using both front-end and back-end technologies and am eager to bring these recently aquired skillsets to a professional setting.
                    </p> */}
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro 