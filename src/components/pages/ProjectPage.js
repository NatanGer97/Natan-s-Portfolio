import { useState } from "react";
import ProjectLayout from "../ProjectSection/ProjectsLayout";
import projectsRobot from '../../assets/images/projectsRobot.png'
import {BsGithub} from "react-icons/bs";


const ProjectPage = (props) => 
{
    useState(() =>
    {
            window.document.title = props.title
    },[])
    return (
      <div className="project_page row-2  ">
        <div className="container-fluid">
          <h1 className="logoName ">Projects</h1>
          <a
            className="text-muted GitHub_link"
            href="https://github.com/NatanGer97"
          >
            For more projects visit
            <span className="px-2">
              {" "}
              <BsGithub />
            </span>
          </a>

          <img
            src={projectsRobot}
            className="animate__animated animate__backInRight"
          />
        </div>
        <ProjectLayout />
      </div>
    );
}

export default ProjectPage;