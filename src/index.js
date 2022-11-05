import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./Card/Card.js";

function Page() {
  return (
    <>
      <Card />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
