import "./project.css";
import Github from "../../img/github.png";

const Project = ({ img, link, desc, gl }) => {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <div class="container">
                {/* <a href={link} target="_blank" rel="noreferrer"> */}
                <img src={img} alt="" className="p-img" />
                <div class="overlay">
                    <div class="text">
                        {/* {desc} */}
                        {desc}
                    </div>
                    <div>
                        <a href={gl} target="_blank" rel="noreferrer">
                            <img class="g-icon" id="g-icon-hover" src={Github} alt="" title="View Project Repository"/>
                        </a>
                    </div>
                </div>
                {/* </a> */}
            </div>
        </div>
    );
};

export default Project;