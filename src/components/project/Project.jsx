import "./project.css";
import Github from "../../img/github2.png";
import ChainLink from "../../img/chain-link.png";

const Project = ({ img, link, title, desc, techs, gl }) => {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-title-mobile">
                    {title} 
                </div>
            </div>
            <div class="p-container">
                {/* <a href={link} target="_blank" rel="noreferrer"> */}
                <img src={img} alt="" className="p-img" />
                <div class="overlay">
                <div className="p-desc-info-mobile">
                    {desc}
                    {techs} 
                </div>
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