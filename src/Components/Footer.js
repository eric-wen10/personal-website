import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className= "footer">
        <div className = "Links">
            <LinkedInIcon />
            <GitHubIcon />
        </div>
        <p> &copy; 2023 ericwen10.com</p>

        </div>
  );
}

export default Footer