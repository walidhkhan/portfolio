import "./project.css";
import Github from "../../img/github2.png";
import ChainLink from "../../img/chain-link.png";

const Project = ({ img, link, title, desc, techs, gl, imgHeight, imgWidth }) => {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <div className="p-browser-mobile">
                <div className="p-title-mobile">
                    {title}
                </div>
                <img src={img} alt="" className="p-img-mobile" height={imgHeight} width={imgWidth} />
                <div className="p-desc-mobile">
                    - {desc}
                    <br />
                    - Techs Used: {techs}
                    <br />
                    <div className="p-links-mobile">
                        <a href={link} target="_blank" rel="noreferrer">
                            View Project 
                        </a>
                        &nbsp;|&nbsp;
                        <a href={gl} target="_blank" rel="noreferrer">
                            View Repo 
                        </a>
                    </div>
                </div>
                {/* <div className="p-links-mobile">
                        <a href={link} target="_blank" rel="noreferrer">
                            Project Link
                        </a>
                        <a href={gl} target="_blank" rel="noreferrer">
                            View Repo
                        </a>
                </div> */}
            </div>
            <div class="p-container">
                <img src={img} alt="" className="p-img" />
                <div class="overlay">
                    <div className="p-title">
                        {title}
                    </div>
                    <div class="p-desc">
                        {desc}
                    </div>
                    <div class="p-techs">
                        Technologies Used: {techs}
                    </div>
                    <div>
                        <a href={link} target="_blank" rel="noreferrer">
                            <img class="cl-icon" id="cl-icon-hover" src={ChainLink} alt="" title="View Project" />
                        </a>
                    </div>
                    <div>
                        <a href={gl} target="_blank" rel="noreferrer">
                            <img class="g-icon" id="g-icon-hover" src={Github} alt="" title="View Repository" />
                        </a>
                    </div>
                </div>
                {/* </a> */}
            </div>
            {/* <div className="p-info-mobile">
                {title}
                {desc}
                {techs}
            </div> */}
        </div>
    );
};

export default Project;