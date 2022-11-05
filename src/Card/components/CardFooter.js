import React from "react";
import FacebookIcon from "./Facebook-icon.png";
import InstagramIcon from "./Instagram-Icon.png";
import GitHubIcon from "./GitHub-icon.png";

export default function CardFooter() {
  return (
    <div className="Footer">
      <img src={FacebookIcon} alt="facebook icon" className="icon"></img>
      <img src={InstagramIcon} alt="instagram icon" className="icon"></img>
      <img src={GitHubIcon} alt="GitHub icon" className="icon"></img>
    </div>
  );
}
