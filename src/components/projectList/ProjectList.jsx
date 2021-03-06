import "./projectList.css";
import Project from "../project/Project";
import { projects } from "../../data";

const ProjectList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">My Projects</h1>
                <p className="pl-desc">
                    Take a look at what I've created so far!
                </p>
            </div>
            <div className="pl-list">
                {projects.map((item) => (
                    <Project 
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        link={item.link}
                        desc={item.desc}
                        techs={item.techs}
                        gl={item.gl}
                        imgHeight={item.imgHeight}
                        imgWidth={item.imgWidth}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectList;