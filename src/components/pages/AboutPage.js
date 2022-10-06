import { useEffect, useState } from "react";

import aboutMePic from '../../assets/images/aboutMePic.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import NavTabs from "../AboutSection/NavTabs";

const AboutPage = (props) => 
{
    useEffect(() => 
    {
        window.document.title = props.title
    },[]);
    return (
      <div className="">
        <NavTabs />
      </div>

  
    );
}

export default AboutPage;