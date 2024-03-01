import React from 'react';
 import './Navigation.css';

function Navigation() {
    return (  
        <nav>
            <button>History</button>
            <button>Podcast</button>
            <button className='active'>Editing</button>
            <button>Computer</button>
            <button>JavaScript</button>
            <button>HTMl & CSS</button>
            <button>React</button>
        </nav>
    );
}

export default Navigation;