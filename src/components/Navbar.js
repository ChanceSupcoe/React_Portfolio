import React from 'react';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav class="navbar sticky-top">
            <div class="container-fluid">
              <h2 class="navbar-brand" id="title">Chance A Supcoe</h2>
              <div class="dropdown">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Menu
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a class="nav-item" href="#header">Home</a></li>
                    <li><a class="nav-item" href="#portfolio">Portfolio</a></li>
                    <li><a class="nav-item" href="#about-me">About Me</a></li>
                    <li><a class="nav-item" href="#contact">Contact Me</a></li>
                  </ul>
              </div>
            </div>
    </nav>
  );
}

export default Navbar;
