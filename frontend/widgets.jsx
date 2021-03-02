import React from 'react';
import ReactDOM from 'react-dom';

import Clock from "./clock.jsx"; 

const options = [
    { title: 'Cheung', content: 'John' },
    { title: 'Cigale', content: 'John' },
    { title: 'Cena', content: 'John' }
];

function Root() {
    return (
        <div>
            <Clock/>
            {/* <Tab options={options}/> */}
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Root/>, document.getElementById("main"));
});
