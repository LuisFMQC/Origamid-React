import ReactDOM from "react-dom";
import React from "react";

function App(){
    return React.createElement(
        'a', 
        {href: 'https://www.linkedin.com/feed/'}, 'Linkedin'
        );
}

ReactDOM.render(App(), document.getElementById('root'))