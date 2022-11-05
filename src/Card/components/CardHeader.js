import React from "react";
import CardPhoto from "./cardPhoto.JPG";

export default function cardHeader() {
  return (
    <>
      <img src={CardPhoto} alt="user" className="myPhoto" />
      <h1 className="header-text">Yohan Jeon</h1>
      <h2 className="header-text">Front End Developer</h2>
    </>
  );
}
