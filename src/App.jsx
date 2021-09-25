import React from "react";
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

const App = () => {
    return (
        <div>
            <h1 >Hello, <span style={cssStyle}>{greeting}</span></h1>
        </div>
    );
}

export default App;