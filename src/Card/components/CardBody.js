import React from "react";
import EmailIcon from "./email-icon.png";

export default function CardBody() {
  return (
    <>
      <button>
        <img src={EmailIcon} alt="Email Icon"></img>Email
      </button>
      <h3>About</h3>
      <p>
        I am an aspiring front end developer who started learning as of May
        2022. I have taught myself HTML, CSS, JavaScript, and am currently
        learning React to be more marketable.
      </p>
      <br></br>
      <h3>Interests</h3>
      <p>
        science (biology), fishkeeping, gaming, board games, anime,
        psychology/neuroscience, and programming
      </p>
    </>
  );
}
