import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
//import WebIcon from '@mui/icons-material/Web';

function Experience() {
  return (
    <div className='experience'> 
      {" "}
      <VerticalTimeline lineColor="#3e497a">

      <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2023-Present"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<WorkIcon/>}>
        <h3 className='vertical-timeline-element-title'>Machine Learning at Berkeley</h3>
        <h4 className='vertical-timeline-element-title'>Machine Learning Engineer</h4>
        <h5 className='vertical-timeline-element-title'> Berkeley, California, USA</h5>
        <ul>
          <li>Experience with CV, NLP, search algoirthms, and unsupervised learning</li>
          <li>Experience using Pandas, PyTorch, and NumPy to implement NNs and CNNs</li>
          <li>Presented a capstone project about real-time change detection of object motion for efficient surveillance at the
            Berkeley EECS Annual Research Symposium</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2022-Present"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<WorkIcon/>}>
        <h3 className='vertical-timeline-element-title'>Space Technologies at California</h3>
        <h4 className='vertical-timeline-element-title'> Machine Learning Engineer</h4>
        <h5 className='vertical-timeline-element-title'> Berkeley, California, USA</h5>
        <ul>
          <li>Designing an autonomous rover for the University Rover Challenge</li>
          <li>Implementing A* star path planning methods for autonomous rover drive</li>
          <li>Developed a program to parse NMEA data into GPS coordinates</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2020-Present"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<WorkIcon/>}>
        <h3 className='vertical-timeline-element-title'>Western Mechatronics</h3>
        <h4 className='vertical-timeline-element-title'> Director of External Operations</h4>
        <h5 className='vertical-timeline-element-title'> Calgary, Alberta, Canada</h5>
        <ul>
          <li>Played an instrumental role in hosting the 2021 VEX Robotics Chinook Cup qualifying event and the 2022 VEX
            Robotics Alberta Provincial Championship which connected over 500 robot enthusiasts from across Alberta</li>
          <li>Assisted in hosting Canada’s first VEX signature event, drawing over 120 teams from across the world to Calgary.
            Received local and provincial news coverage.</li>
            <a href='https://www.westernmech.ca/'>
            https://www.westernmech.ca/
            </a>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2022-2026"
        iconStyle={{background: "#FAD02C", color: "#fff"}}
        icon={<SchoolIcon/>}>
        <h3 className='vertical-timeline-element-title'>University of Califronia, Berkeley</h3>
        <h4 className='vertical-timeline-element-title'> Electrical Engineering and Computer Sciences</h4>
        <h5 className='vertical-timeline-element-title'> Berkeley, California, USA</h5>
        <ul>
          <li>GPA: 3.83</li>
          <li>Technical Courses: CS61A, CS61B, EECS16A</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
        date="June 2022 - August 2022"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<WorkIcon/>}>
        <h3 className='vertical-timeline-element-title'>Kezen Thermal</h3>
        <h4 className='vertical-timeline-element-title'> Electrical EIT</h4>
        <h5 className='vertical-timeline-element-title'> Calgary, AB, Canada</h5>
        <ul>
          <li>Engaged with industry leaders through CSA 8149.3 and Hydrogen Combustion code development meetings.</li>
          <li>Electrical engineering drawings for boiler system control panel @YYC Airport.</li>
          <li>Ran conduit and pulled conductors for a new control system at Vitreous Glass. Also assisted with
              troubleshooting annunciation issues in the control panel.</li>
          <li>Aided in the installation of new electrical panels and troubleshot grounding issues using a
              Fluke Advanced Earth Analyzer and provisions from the IEEE Green Book</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2020-2022"
        iconStyle={{background: "#A30000", color: "#fff"}}
        icon={<WorkIcon/>}>
        <h3 className='vertical-timeline-element-title'> Western Canada HS Robotics Club</h3>
        <h4 className='vertical-timeline-element-title'> Co-Founder and Executive Member</h4>
        <h5 className='vertical-timeline-element-title'> Calgary, AB, Canada</h5>
        <ul>
          <li>Spearheaded the creation of 8 VEX robotics teams</li>
          <li>Held executive team accountable by taking meeting minutes</li>
          <li>Captain and driver for team 3300A. Built robot drivetrain, robot arms, and programmed through C++</li>
          <li>Won the Finalists Award at the 2022 VEX Robotics Alberta Provincial Championship</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2019-2022"
        iconStyle={{background: "#A30000", color: "#fff"}}
        icon={<SchoolIcon/>}>
        <h3 className='vertical-timeline-element-title'>Western Canada High School</h3>
        <h4 className='vertical-timeline-element-title'> International Baccalaureate Diploma, High School Diploma</h4>
        <h5 className='vertical-timeline-element-title'> Calgary, AB, Canada</h5>
        <ul>
          <li>GPA: 4.0</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2020-2021"
        iconStyle={{background: "#A30000", color: "#fff"}}
        icon={<WorkIcon/>}>
        <h3 className='vertical-timeline-element-title'>Ignite Youth Club</h3>
        <h4 className='vertical-timeline-element-title'>Co-Founder</h4>
        <h5 className='vertical-timeline-element-title'> Calgary, AB, Canada</h5>
        <ul>
          <li>Ignite Youth Club is an international company I co-founded that aims to provide accessible education for youth ranging from the Humanities to STEM</li>
          <li>By advertising through school boards and social media I was able to grow my organization to 80 members in 3 countries, translating to a revenue of $20,000 in 4 years.</li>
          <li>Using my profit margins. I lead several donation initiatives that helped The Drop in Center, Alpha House, and Western Canada High School</li>
          <li>
            <a href='https://www.igniteyouthclub.com/'>
            https://www.igniteyouthclub.com/
            </a>
          </li>
        </ul>
      </VerticalTimelineElement>
      
      </VerticalTimeline>
    
    </div>
  )
}

export default Experience