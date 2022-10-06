import {Fragment, React, useEffect} from 'react'

import HiRobot from '../../assets/images/HiRobot.png'


const HomePage = (props)  => 
{
  useEffect(() => 
    {
        window.document.title = props.title
    },[]);
    return (
      
      <div className="card container ">
      <div className="row flex-row-reverse ">
        <div className="col-md-3">
          <img src={HiRobot} className="img-fluid  animate__animated animate__fadeIn" />
        </div>
        <div className="col-md-8 align-items-center">
          <div className="card-body ">
            <h3 className="logoName pt-4 float-center animate__animated animate__backInLeft">Natan Gershbein</h3>
            <p className="logoName float-end animate__animated animate__backInRight">Software Developer</p>
          </div>
        </div>
      </div>
    </div>

  
    );
}

export default HomePage;