import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const cssStyle = {};

let currentDate = new Date();
let greeting = '';
let hours = currentDate.getHours();

if (hours >= 1 && hours < 12) {
  greeting = "Good Morning!!";
  cssStyle.color = "green";
}
else if (hours >= 12 && hours < 19) {
  greeting = "Good Afternoon!!";
  cssStyle.color = "orange";
}

else {
  greeting = "Good Night!!";
  cssStyle.color = "black";
}

ReactDOM.render(
  <>
    <div>
      <h1 >Hello, <span style={cssStyle}>{greeting}</span></h1>
    </div>
  </>
  , document.getElementById("root")
);

