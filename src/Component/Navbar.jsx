import React from 'react';
import '../App.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div>
            <h2>ARACHNOMESH</h2>
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Bottles</li>
                <li>About</li>
                <li>Contact</li>
                <li>
                    <button className='btn'>Login</button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar