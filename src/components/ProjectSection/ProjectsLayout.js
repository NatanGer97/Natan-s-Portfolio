import ProjectCardItem from "./ProjectCardItem";

import Row from 'react-bootstrap/Row';




const ProjectLayout = (props) =>
{
    return (
      <Row xs={1} md={2} className="g-2" >
        <ProjectCardItem 
          title={" Bar Management System "}
          description={"Full Stack Bar Management System"}
          link={"https://github.com/Alzoke/barmanager"}
          skills={"Java, Spring-Boot"}
        />
        <ProjectCardItem
          title={" Desktop Facebook App Project "}
          description={
            "C# project focuses on correct and efficient use of OOP concepts combined with Design Patterns."
          }
          link={"https://github.com/NatanGer97/DesktopFacebookApp "}
          skills={"C#,.Net and WinForms"}
        />
        <ProjectCardItem
          title={" Cost Manager "}
          link={"https://github.com/NatanGer97/CostMangerLocal"}
          description={
            "REST Web Service app with full crud functionality, allowing users to track financial expenses"
          }
          
          skills={"JS, Node(express.js) and Bootstrap"}

        />
        <ProjectCardItem
          title={" Cost Management System  "}
          link={"https://github.com/NatanGer97/FinalCostManger"}
          description={
            "Multi-Threaded Desktop Application providing clients with the ability to track their expenses using reports"
          }
          
          skills={"Java, Swings framework, MySQL, MVVM Architecture"}
        />
          <ProjectCardItem
          link={"https://github.com/NatanGer97/Data--Science-Project"}
          title={" Data Science Project"}
          description={
            "Data Science project, uses logistics regression to predict the success of a video game via Supervised learning."
          }
          
          skills={"Python"}
        />
      </Row>
    );
}

export default ProjectLayout;