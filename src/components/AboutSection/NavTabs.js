
import {AiOutlineFilePdf} from 'react-icons/ai'


import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import aboutMePic from '../../assets/images/aboutMePic.png'
import CV from '../../assets/documents/cv.pdf'
import SkillCard from "./SkillCard";


function NavTabs(props)
{
    const [key, setKey] = useState('about');

    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 d-flex justify-content-center "
      >
        <Tab eventKey={"about"} title="About">
          <div className="card " style={{}}>
            <div className="row flex-row-reverse animate__animated animate__flipInX">
              <div className="col ">
                <img
                  src={aboutMePic}
                  className="img-fluid rounded-start animate__animated animate__flipInX"
                  style={{ maxHeight: "80%" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body text-center">
                  <p className="card-text">
                    B.Sc. Computer Science graduate with a
                    <strong> GPA of 87</strong>.
                    <br /> Experienced in
                    <strong> Java, Python, C#, C, C++, JavaScript.</strong>
                    <br />
                    Looking for <strong>Software Developer</strong> or
                    <strong> Full-Stack</strong> Developer (with
                    <b> Back-End</b> orientation) roles in:
                    <br /> <b>Java, Python, C#, JavaScript</b>.
                    <br />
                    Works efficiently in teams thanks to interpersonal skills
                    and communication skills.
                    <br /> Motivated, Self-learner and Team-Player
                  </p>
                  <a href={CV}>
                    <AiOutlineFilePdf size={"50px"} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Tab>

        <Tab eventKey={"skills"} title="Skills">
          <div className="animate__animated animate__flipInX  ">
            <div className="container">
              <h4 className="logoName">Languages</h4>
              <div className="row row-cols-1 row-cols-md-3 g-4  gap-2">
                <SkillCard skill={"JAVA"} />
                <SkillCard skill={"C#"} />
                <SkillCard skill={"Python"} />
                <SkillCard skill={"Java Script"} />
                <SkillCard skill={"C"} />
                <SkillCard skill={"C++"} />
              </div>
            </div>
          
            <div className="container">
              <h4 className="logoName">Libraries</h4>
              <div className="row row-cols-1 row-cols-md-3 g-4  gap-2 ">
                <SkillCard skill={"Spring Boot"} />
                <SkillCard skill={"Node.Js"} />
                <SkillCard skill={".Net"} />
                <SkillCard skill={"Express"} />
                <SkillCard skill={"React"} />
                <SkillCard skill={"FastAPI"} />
              </div>
            </div>
            <div className="container">
              <h4 className="logoName ">Databases</h4>

              <div className="row row-cols-1 row-cols-md-3 g-1  gap-2">
                <SkillCard skill={"MySQL"} />
                <SkillCard skill={"MongoDB"} />
              </div>
            </div>

          </div>
        </Tab>
      </Tabs>
    );
}



export default  NavTabs;