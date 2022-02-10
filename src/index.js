//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2021.

import React from "react";
import ReactDOM from "react-dom";

const name = "CenoDigital";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p> Created By {name}</p>
    <p> Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
