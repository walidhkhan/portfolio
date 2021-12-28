import "./projectList.css";
import Project from "../project/Project";

const ProjectList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">My Projects</h1>
                <p className="pl-desc">
                    Take a look at my web developement projects!
                </p>
            </div>
            <div className="pl-list">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    );
};

export default ProjectList