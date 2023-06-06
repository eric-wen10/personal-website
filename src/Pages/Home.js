import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import profile from "../Assets/profile.jpeg";
import "../Styles/Home.css";

console.log(profile);

function Home() {
  return (
    <div className="home">
        <div className='about'>
            <img src={profile} width="350" alt = "Me"/>
            <h2>Hi, My Name is Eric Wen</h2>
            <div className="prompt"> 
                <p> 
                  EECS @ UC Berkeley, Passionate about Software, Hardware, and Robotics
                </p>
                <a href="https://www.linkedin.com/in/ericwen10/">
                    <LinkedInIcon />
                </a>
                <a href="mailto:ericwen10@berkeley.com">
                    <EmailIcon />
                </a>
                <a href="https://github.com/eric-wen10">
                    <GitHubIcon />
                </a>
            </div>
        </div>
        <div className='skills'>
          <h1> Skills</h1>
        </div>
        <ul className='list'>
            <p className="item">
                <h2>Languages</h2>
                <span> Python, Java, Pytorch, Pandas, C++, HTML, CSS, SQL, Scheme (Lisp)</span>
            </p>
            <p className="item">
                <h2>Applications</h2>
                <span> React.js, Office Products</span>
            </p>
            <p className="item">
                <h2>EE and Robotics</h2>
                <span> Circuit Design, Arduino, VEX robot design</span>
            </p>
        </ul>
    </div>
  )
}

export default Home
