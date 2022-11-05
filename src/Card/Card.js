import React from "react";
import CardHeader from "./components/CardHeader.js";
import CardBody from "./components/CardBody.js";
import CardFooter from "./components/CardFooter.js";

export default function Card() {
  return (
    <div className="card">
      <CardHeader />
      <CardBody />
      <CardFooter />
    </div>
  );
}
